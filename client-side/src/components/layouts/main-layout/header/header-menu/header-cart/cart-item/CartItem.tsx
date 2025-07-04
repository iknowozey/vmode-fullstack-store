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
				className='relative w-24 h-24 rounded-sm overflow-hidden flex-shrink-0'
			>
				<Image
					src={item.product.images[0]}
					alt={item.product.title}
					fill
					style={{ objectFit: 'contain' }}
				/>
			</Link>
			<div className='ml-4 flex-grow'>
				<h2 className='text-base font-medium leading-tight mb-1 break-words'>
					{item.product.title}
				</h2>
				<p className='text-sm text-foreground/70 mb-2'>
					{formatPrice(item.product.price)}
				</p>
				<CartActions item={item} />
			</div>
		</div>
	)
}
