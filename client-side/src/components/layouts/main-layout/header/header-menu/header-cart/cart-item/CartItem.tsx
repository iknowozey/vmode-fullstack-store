import Image from 'next/image'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'
import { ICartItem } from '@/shared/types/cart.interface'
import { CartActions } from './CartActions'
import { formatPrice } from '@/lib/string/format-price'

interface CartItemProps {
	item: ICartItem
}

export function CartItem({ item }: CartItemProps) {
	return (
		<div className='flex items-center mb-5'>
			<Link
				href={PUBLIC_URL.product(item.product.id)}
				className='relative h-28 w-28 rounded-md overflow-hidden'
			>
				<Image
					src={item.product.images[0]}
					alt={item.product.title}
					fill
				/>
			</Link>
			<div className='ml-6'>
				<h2>{item.product.title}</h2>
				<p>{formatPrice(item.product.price)}</p>
				<CartActions item={item} />
			</div>
		</div>
	)
}
