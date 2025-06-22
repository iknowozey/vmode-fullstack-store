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
				'flex items-center gap-x-3 text-slate-600 text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-blue-200/20 hover:text-foreground-500 hover:drop-shadow-sm bg-transparent transition-all duration-200',
				{
					['text-sm text-foreground-500 bg-blue-200/20']:
						pathname === route.link
				}
			)}
		>
			<route.icon />
			{route.value}
		</Link>
	)
}
