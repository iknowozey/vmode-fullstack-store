import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { PUBLIC_URL } from '@/config/url.config'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Спасибо за заказ!',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<div className='my-24 py-50 mx-auto text-center flex flex-col items-center max-w-4xl space-y-6'>
			<h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
				Спасибо за заказ!
			</h1>
			<p className='text-lg text-muted-foreground'>
				Мы ценим Ваше доверие и приложим все усилия, чтобы доставить Ваш заказ
				как можно быстрее
			</p>
			<Link href={PUBLIC_URL.home()}>
				<Button variant='default'>
					На главную
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
