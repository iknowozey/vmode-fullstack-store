import { useMutation } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { PUBLIC_URL } from '@/config/url.config'
import { storeService } from '@/services/store.service'

export function useDeleteStore() {
	const params = useParams<{ storeId: string }>()
	const router = useRouter()

	const { mutate: deleteStore, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: () => storeService.delete(params.storeId),
		onSuccess() {
			toast.success('Ваш магазин удален', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
			router.push(PUBLIC_URL.home())
		},
		onError() {
			toast.error('Ошибка при удалении магазина', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
		}
	})

	return useMemo(
		() => ({ deleteStore, isLoadingDelete }),
		[deleteStore, isLoadingDelete]
	)
}
