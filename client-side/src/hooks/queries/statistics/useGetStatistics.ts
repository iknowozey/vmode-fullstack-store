import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import { statisticsService } from '@/services/statistics.service'

export const useGetStatistics = () => {
  const params = useParams<{ storeId: string }>()

  const { data: main, isLoading: isMainLoading } = useQuery({
    queryKey: ['get main statistics'],
    queryFn: () => statisticsService.getMain(params.storeId),
    enabled: !!params.storeId, 
  })


  const { data: middle, isLoading: isMiddleLoading } = useQuery({
    queryKey: ['get middle statistics'],
    queryFn: () => statisticsService.getMiddle(params.storeId),
    enabled: !!params.storeId,
  })


  const isLoading = isMainLoading || isMiddleLoading;

  return useMemo(() => ({
    main,
    middle,
    isLoading,
  }), [main, middle, isLoading])
}