'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Loader } from '@/components/ui/Loader'
import { ToggleTheme } from '@/components/ui/ToggleTheme'
import { DASHBOARD_URL } from '@/config/url.config'
import { useProfile } from '@/hooks/useProfile'
import { StoreSwitcher } from './StoreSwitcher'

export function Header() {
	const { user, isLoading } = useProfile()

	return (
		<div className='p-5 gap-x-4 h-full flex items-center bg-background border-b'>
			<div className='flex items-center gap-x-4 ml-auto'>
				{isLoading ? (
					<Loader />
				) : (
					user && (
						<>
							<StoreSwitcher items={user.stores} />
							<ToggleTheme />
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
