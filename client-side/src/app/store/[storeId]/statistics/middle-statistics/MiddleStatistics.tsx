import { Skeleton } from '@/components/ui/Skeleton'
import { useGetStatistics } from '@/hooks/queries/statistics/useGetStatistics'
import { LastUsers } from './LastUsers'
import { Overview } from './Overview'

export function MiddleStatistics() {
  const { middle, isLoading } = useGetStatistics() // Получаем isLoading

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6'>
      {isLoading ? (
        <>
          <Skeleton className='h-102 w-full rounded-xl col-span-1 lg:col-span-3 xl:col-span-4' />
          <Skeleton className='h-102 w-full rounded-xl col-span-1 lg:col-span-3' />
        </>
      ) : (
        middle && (middle.monthlySales.length || middle.lastUsers.length) ? (
          <>
            <div className='col-span-1 lg:col-span-3 xl:col-span-4'>
              <Overview data={middle.monthlySales} />
            </div>
            <div className='col-span-1 lg:col-span-3'>
              <LastUsers data={middle.lastUsers} />
            </div>
          </>
        ) : (
          <div className='col-span-full text-center text-lg text-muted-foreground py-10'>
            Статистка отсутствует, потому что в Вашем магазине еще не совершали покупок
          </div>
        )
      )}
    </div>
  )
}