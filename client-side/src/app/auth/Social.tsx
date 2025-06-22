'use client'

import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/Button'
import { SERVER_URL } from '@/config/api.config'

export function Social() {
	const router = useRouter()

	return (
		<div className='space-y-3 w-full mt-5 '>
			<Button
				className='w-full cursor-pointer'
				variant='outline'
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FcGoogle className='size-5 mr-2' />
				Продолжить через Google
			</Button>
			<Button
				className='w-full cursor-pointer'
				variant='outline'
				onClick={() => router.push(`${SERVER_URL}/auth/yandex`)}
			>
				<FaYandex color='#FC3F1D' className='size-5 mr-2' />
				Продолжить через Яндекс
			</Button>
		</div>
	)
}
