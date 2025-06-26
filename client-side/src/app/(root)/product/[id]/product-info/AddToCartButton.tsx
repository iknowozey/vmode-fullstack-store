import { Button } from '@/components/ui/Button'
import { IProduct } from '@/shared/types/product.interface'

interface AddToCartButtonProps {
	product: IProduct
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
	return (
		<Button variant='default' size='lg' className='w-full'>
			Добавить в корзину
		</Button>
	)
}
