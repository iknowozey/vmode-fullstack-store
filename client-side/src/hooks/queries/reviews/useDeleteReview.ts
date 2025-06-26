import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { reviewService } from '@/services/review.service'

export const useDeleteReview = () => {
	const queryClient = useQueryClient()

	const { mutate: deleteReview, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete review'],
		mutationFn: (reviewId: string) => reviewService.delete(reviewId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['product']
			})
			toast.success('Отзыв удален', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
		},
		onError() {
			toast.error('Ошибка при удалении отзыва', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
		}
	})

	return useMemo(
		() => ({ deleteReview, isLoadingDelete }),
		[deleteReview, isLoadingDelete]
	)
}
