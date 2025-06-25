'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { DataTable } from '@/components/ui/data-table/DataTable'
import DataTableLoading from '@/components/ui/data-table/DataTableLoading'
import { STORE_URL } from '@/config/url.config'
import { useGetProducts } from '@/hooks/queries/products/useGetProducts'
import { IProductColumn, productColumns } from './ProductColumns'
import { formatPrice } from '@/lib/string/format-price'

export function Products() {
	const params = useParams<{ storeId: string }>()

	const { products, isLoading } = useGetProducts()

	const formattedProducts: IProductColumn[] = products
		? products.map(product => ({
				id: product.id,
				title: product.title,
				price: formatPrice(product.price),
				category: product.category.title,
				color: product.color.value,
				storeId: product.storeId
			}))
		: []

	return (
		<div className='p-6'>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className='flex items-center justify-between'>
						<Heading
							title={`Товары (${products?.length})`}
							description='Все товары вашего магазина'
						/>
						<div>
							<Link href={STORE_URL.productCreate(params.storeId)}>
								<Button variant='default' className='px-15 py-5'>
									<Plus className='size-4' />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className='mt-3'>
						<DataTable
							columns={productColumns}
							data={formattedProducts}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	)
}
