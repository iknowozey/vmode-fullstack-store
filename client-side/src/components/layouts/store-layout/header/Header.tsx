'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Loader } from '@/components/ui/Loader'
import { DASHBOARD_URL } from '@/config/url.config'
import { useProfile } from '@/hooks/useProfile'

export function Header() {
	const { user, isLoading } = useProfile()

	return (
		<div className='p-5 gap-x-4 h-full flex items-center bg-white border-b'>
			<div className='flex items-center gap-x-4 ml-auto'>
				{isLoading ? (
					<Loader />
				) : (
					user && (
						<>
							<Link href={DASHBOARD_URL.home()}>
								<Image
									className='rounded-full'
									src={user.picture}
									alt={user.name}
									width={42}
									height={42}
								/>
							</Link>
						</>
					)
				)}
			</div>
		</div>
	)
}
