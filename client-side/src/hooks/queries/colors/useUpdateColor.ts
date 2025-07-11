import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { colorService } from '@/services/color.service'
import { IColorInput } from '@/shared/types/color.interface'

export const useUpdateColor = () => {
	const params = useParams<{ colorId: string }>()
	const queryClient = useQueryClient()

	const { mutate: updateColor, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update color'],
		mutationFn: (data: IColorInput) =>
			colorService.update(params.colorId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get colors for store dashboard']
			})
			toast.success('Цвет обновлён', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
		},
		onError() {
			toast.error('Ошибка при обновлении цвета', {
				style: {
					backgroundColor: 'Background',
					color: '#999999'
				}
			})
		}
	})

	return useMemo(
		() => ({ updateColor, isLoadingUpdate }),
		[updateColor, isLoadingUpdate]
	)
}
