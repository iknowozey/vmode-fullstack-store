import { Skeleton } from '@/components/ui/Skeleton'
import { useGetStatistics } from '@/hooks/queries/statistics/useGetStatistics'
import { MainStatisticsItem } from './MainStatisticsItem'

export function MainStatistics() {
	const { main } = useGetStatistics()

	return (
		<div className='mt-3 grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
			{main?.length ? (
				main.map(item => <MainStatisticsItem key={item.id} item={item} />)
			) : (
				<>
					<Skeleton className='h-35 w-full rounded-xl' />
					<Skeleton className='h-35 w-full rounded-xl' />
					<Skeleton className='h-35 w-full rounded-xl' />
					<Skeleton className='h-35 w-full rounded-xl' />
				</>
			)}
		</div>
	)
}
