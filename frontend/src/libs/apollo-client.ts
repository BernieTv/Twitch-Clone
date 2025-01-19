import { split } from '@apollo/client'
import { HttpLink } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import {
	NextSSRApolloClient,
	NextSSRInMemoryCache
} from '@apollo/experimental-nextjs-app-support/ssr'

import { SERVER_URL, WEBSOCKET_URL } from './constants/url.constants'

export function makeClient() {
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

	return new NextSSRApolloClient({
		link: splitLink,
		cache: new NextSSRInMemoryCache(),
		credentials: 'include'
	})
}
