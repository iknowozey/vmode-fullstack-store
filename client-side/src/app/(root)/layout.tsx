import { MainLayout } from '@/components/layouts/main-layout/MainLayout'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div suppressHydrationWarning>
			<MainLayout>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</MainLayout>
		</div>
	)
}
