import Image from 'next/image'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'
import { IProduct } from '@/shared/types/product.interface'
import { formatPrice } from '@/lib/string/format-price'

interface ProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryId = product.category?.id;
  const categoryTitle = product.category?.title;

  return (
    <div className='bg-transparent'>
      <Link href={PUBLIC_URL.product(product.id)}>
        <Image
          className='rounded-lg'
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
        />
      </Link>

      <h3 className='mt-4 font-semibold text-foreground line-clamp-1'>
        {product.title}
      </h3>
      {categoryId && categoryTitle && (
        <Link
          href={PUBLIC_URL.category(categoryId)}
          className='mt-1 text-sm text-foreground/70'
        >
          {categoryTitle}
        </Link>
      )}
      <p className='mt-1 font-medium text-sm text-foreground/50'>
        {formatPrice(product.price)}
      </p>
    </div>
  )
}