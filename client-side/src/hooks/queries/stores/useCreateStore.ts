import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { STORE_URL } from '@/config/url.config'
import { storeService } from '@/services/store.service'
import { IStoreCreate } from '@/shared/types/store.interface'

export function useCreateStore() {
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: createStore, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create store'],
		mutationFn: (data: IStoreCreate) => storeService.create(data),
		onSuccess(store) {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success('Ваш магазин создан', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
			router.push(STORE_URL.home(store.id))
		},
		onError() {
			toast.error('Ошибка при создании магазина')
		}
	})

	return useMemo(
		() => ({ createStore, isLoadingCreate }),
		[createStore, isLoadingCreate]
	)
}
