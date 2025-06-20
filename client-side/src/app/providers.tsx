'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }: PropsWithChildren) {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			<Toaster />
			{children}
		</QueryClientProvider>
	)
}
