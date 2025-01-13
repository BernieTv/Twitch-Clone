'server-only'

import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { cookies } from 'next/headers'

import { SERVER_URL, WEBSOCKET_URL } from './constants/url.constants'

const httpLink = createUploadLink({
	uri: SERVER_URL,
	credentials: 'include',
	headers: {
		'apollo-require-preflight': 'true'
	},
	fetchOptions: { credentials: 'include' }
})

const authLink = setContext(async (_, { headers }) => {
	const cookie = await cookies()

	return {
		headers: {
			...headers,
			cookie
		}
	}
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

export const client = new ApolloClient({
	link: authLink.concat(splitLink),
	cache: new InMemoryCache(),
	credentials: 'include'
})
