import { useGetStatistics } from '@/hooks/queries/statistics/useGetStatistics'
import { LastUsers } from './LastUsers'
import styles from './MiddleStatistics.module.scss'
import { Overview } from './Overview'

export function MiddleStatistics() {
	const { middle } = useGetStatistics()

	return (
		<div className={styles.middle}>
			{middle?.monthlySales.length || middle?.lastUsers.length ? (
				<>
					<div className={styles.overview}>
						<Overview data={middle.monthlySales} />
					</div>
					<div className={styles.last_users}>
						<LastUsers data={middle.lastUsers} />
					</div>
				</>
			) : (
				<div className='pt-70 flex justify-center text-4xl'>Отсутствуют данные для составления графика</div>
			)}
		</div>
	)
}
