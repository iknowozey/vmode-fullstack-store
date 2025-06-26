'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/form-elements/Input'
import { PUBLIC_URL } from '@/config/url.config'

export function SearchInput() {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const router = useRouter()

	return (
		<div className='flex items-center relative'>
			<Input
				className='rounded-lg rounded-r-none focus-visible:ring-transparent pr-8'
				placeholder='Поиск товаров'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<Button
				className='rounded-l-none'
				variant='default'
				onClick={() =>
					router.push(PUBLIC_URL.explorer(`?searchTerm=${searchTerm}`))
				}
			>
				<Search size={16} />
			</Button>
		</div>
	)
}
