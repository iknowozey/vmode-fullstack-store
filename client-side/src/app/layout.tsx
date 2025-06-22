import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import './globals.css'
import { Providers } from './providers'

const montserrat = Montserrat({
	variable: '--font-geist-montserrat',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={`${montserrat.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Providers>{children}</Providers>
				</ThemeProvider>
			</body>
		</html>
	)
}
