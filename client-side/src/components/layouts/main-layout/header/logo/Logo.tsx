import Image from 'next/image'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import { LogoClient } from './LogoClient'

export function Logo() {
	return (
		<Link
			href={PUBLIC_URL.home()}
			className='flex items-center gap-x-3 hover:opacity-75 transition-opacity'
		>
			<LogoClient />
			<div className='text-2xl font-bold text-foreground-600'>
				{SITE_NAME}
			</div>
		</Link>
	)
}
