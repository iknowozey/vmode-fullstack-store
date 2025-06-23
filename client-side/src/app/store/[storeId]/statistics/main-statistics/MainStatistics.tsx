import { useGetStatistics } from '@/hooks/queries/statistics/useGetStatistics'
import { MainStatisticsItem } from './MainStatisticsItem'

export function MainStatistics() {
	const { main } = useGetStatistics()

	return (
		<div className='mt-3 grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
			{main?.length ? (
				main.map(item => (
					<MainStatisticsItem key={item.id} item={item} />
				))
			) : (
				// TODO СДЕЛАТЬ ЗДЕСЬ СКЕЛЕТОН
				<div className='flex pt-13 justify-center text-3xl col-span-full'>
					Отсутствуют данные по таблицам
				</div>
			)}
		</div>
	)
}
