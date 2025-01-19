'use client'

import { ApolloProvider } from '@apollo/client'
import type { PropsWithChildren } from 'react'

import { makeClient } from '@/libs/apollo-client'

export function ApolloClientProvider({ children }: PropsWithChildren<unknown>) {
	return <ApolloProvider client={makeClient()}>{children}</ApolloProvider>
}
