import { PropsWithChildren } from 'react'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex-1'>
				<main className='mx-5 lg:mx-14'>{children}</main>
			</div>
		</div>
	)
}
