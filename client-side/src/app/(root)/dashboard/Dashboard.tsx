'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { DataTable } from '@/components/ui/data-table/DataTable'
import { useProfile } from '@/hooks/useProfile'
import { saveTokenStorage } from '@/services/auth/auth-token.service'
import { authService } from '@/services/auth/auth.service'
import { EnumOrderStatus } from '@/shared/types/order.interface'
import { IOrderColumn, orderColumns } from './OrderColumns'
import { formatDate } from '@/lib/date/format-date'
import { formatPrice } from '@/lib/string/format-price'

export function Dashboard() {
	const router = useRouter()
	const searchParams = useSearchParams()
	
	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { user } = useProfile()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth'),
	})

	if (!user) return null

	const formattedOrders: IOrderColumn[] = user.orders.map(order => ({
		createdAt: formatDate(order.createdAt),
		status: order.status === EnumOrderStatus.PENDING ? 'В ожидании' : 'Оплачен',
		total: formatPrice(order.total)
	}))

	return (
		<div className='my-6'>
			<div className='flex items-center justify-between mb-4'>
				<h1 className='text-2xl font-bold'>Ваши заказы</h1>
				<Button variant='default' onClick={() => logout()}>
					<LogOut size={16} className='mr-2'/>
					Выйти
				</Button>
			</div>
			<DataTable columns={orderColumns} data={formattedOrders} />
		</div>
	)
}
