import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { categoryService } from '@/services/category.service'
import { ICategoryInput } from '@/shared/types/category.interface'

export const useUpdateCategory = () => {
	const params = useParams<{ categoryId: string }>()
	const queryClient = useQueryClient()

	const { mutate: updateCategory, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update category'],
		mutationFn: (data: ICategoryInput) =>
			categoryService.update(params.categoryId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get categories for store dashboard']
			})
			toast.success('Категория обновлена', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
		},
		onError() {
			toast.error('Ошибка при обновлении категории', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
		}
	})

	return useMemo(
		() => ({ updateCategory, isLoadingUpdate }),
		[updateCategory, isLoadingUpdate]
	)
}
