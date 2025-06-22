import { ThemeProvider } from '@/components/ui/ThemeProvider'

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div suppressHydrationWarning>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</div>
	)
}
