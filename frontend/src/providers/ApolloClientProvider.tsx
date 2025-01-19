'use client'

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
import type { PropsWithChildren } from 'react'

import { makeClient } from '@/libs/apollo-client'

export function ApolloClientProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	)
}
