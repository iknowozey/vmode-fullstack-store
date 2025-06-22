'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IMenuItem } from './menu.interface'
import { cn } from '@/lib/utils'

interface MenuItemProps {
	route: IMenuItem
}

export function MenuItem({ route }: MenuItemProps) {
	const pathname = usePathname()

	return (
		<Link
			href={route.link}
			className={cn(
				'flex items-center gap-x-2.5 text-slate-500 text-sm font-medium py-2.5  rounded-lg hover:bg-foreground-200/20 hover:text-foreground hover:drop-shadow-sm bg-transparent transition-all duration-200 ',
				{
					['text-sm text-foreground bg-gray-200/20 hover:bg-gray-200/20 hover:text-background-500']:
						pathname === route.link
				}
			)}
		>
			<route.icon />
			{route.value}
		</Link>
	)
}
