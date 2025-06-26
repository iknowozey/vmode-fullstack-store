'use client'

import { useQuery } from '@tanstack/react-query'
import { Catalog } from '@/components/ui/catalog/Catalog'
import { productService } from '@/services/product.service'
import { IProduct } from '@/shared/types/product.interface'
import { ProdcutGallery } from './prodcut-gallery/ProdcutGallery'
import { ProductInfo } from './product-info/ProductInfo'
import { ProductReviews } from './product-reviews/ProductReviews'

interface ProductProps {
	initialProduct: IProduct
	similarProducts: IProduct[]
	id?: string
}

export function Product({
	initialProduct,
	similarProducts,
	id = ''
}: ProductProps) {
	const { data: product } = useQuery({
		queryKey: ['product', initialProduct.id],
		queryFn: () => productService.getById(id),
		initialData: initialProduct,
		enabled: !!id
	})

	return (
		<div className='mx-auto max-w-7xl'>
			<div className='space-y-7 px-4 py-10 sm:px-6 lg:px-8'>
				<div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
					<ProdcutGallery product={product} />
					<ProductInfo product={product} />
				</div>
			</div>
			<Catalog title='Похожие товары' products={similarProducts} />
			<ProductReviews product={product} />
		</div>
	)
}
