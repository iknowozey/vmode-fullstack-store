import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { PUBLIC_URL } from '@/config/url.config'
import { SITE_DESCRIPTION } from '@/constants/seo.constants'

export function Hero() {
	return (
		<div className='my-24 py-20 mx-auto text-center flex flex-col items-center max-w-4xl space-y-6'>
			<h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
				Здравствуйте!
			</h1>
			<p className='text-lg text-muted-foreground'>{SITE_DESCRIPTION}</p>
			<Link href={PUBLIC_URL.explorer()}>
				<Button variant='default'>
					За покупками
					<ArrowRight size={16} className='ml-2 transition-all hover:ml-3' />
				</Button>
			</Link>
		</div>
	)
}
