'use client'

import { split } from '@apollo/client'
import { HttpLink } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache
} from '@apollo/experimental-nextjs-app-support'
import type { PropsWithChildren } from 'react'

import { SERVER_URL, WEBSOCKET_URL } from '../libs/constants/url.constants'

function makeClient() {
	const httpLink = new HttpLink({
		uri: SERVER_URL,
		credentials: 'include',
		headers: {
			'apollo-require-preflight': 'true'
		},
		fetchOptions: { credentials: 'include' }
	})

	const wsLink = new WebSocketLink({
		uri: WEBSOCKET_URL,
		options: {
			reconnect: true
		}
	})

	const splitLink = split(
		({ query }) => {
			const definition = getMainDefinition(query)

			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'subscription'
			)
		},
		wsLink,
		httpLink
	)

	return new ApolloClient({
		link: splitLink,
		cache: new InMemoryCache(),
		credentials: 'include'
	})
}

export function ApolloClientProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	)
}
