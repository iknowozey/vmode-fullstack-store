import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ILastUsers } from '@/shared/types/statistics.interface'
import { formatPrice } from '@/lib/string/format-price'

interface LastUsersProps {
	data: ILastUsers[]
}

export function LastUsers({ data }: LastUsersProps) {
	return (
		<Card>
			<CardHeader className='flex flex-col items-stretch space-y-0 border-b p-4'>
				<CardTitle>Прибыль</CardTitle>
			</CardHeader>
			<CardContent>
				{data.length ? (
					data.map(user => (
						<div className='flex items-center space-y-4' key={user.id}>
							<Image
								src={user.picture}
								alt={user.name}
								className='rounded-full'
								width={40}
								height={40}
							/>
							<div className='ml-4 space-y-1 text-sm text-muted-foreground'>
								<p className='leading-none text-foreground font-medium'>
									{user.name}
								</p>
								<p>{user.email}</p>
							</div>
							<div className='ml-auto font-medium'>
								+{formatPrice(user.total)}
							</div>
						</div>
					))
				) : (
					<div>{`У этого магазина нет покупателей :(`}</div>
				)}
			</CardContent>
		</Card>
	)
}
