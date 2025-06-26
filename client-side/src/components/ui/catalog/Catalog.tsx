import Link from 'next/link'
import { ICatalog } from './catalog.interface'
import { ProductCard } from './product-card/ProductCard'

export function Catalog({
	title,
	description,
	linkTitle,
	link,
	products
}: ICatalog) {
	return (
		<div className='px-4 lg:px-0 pb-8'>
			<div className='md:flex md:items-center md:justify-between mb-4'>
				<div>
					<h1 className='text-2xl font-bold'>{title}</h1>
					{description && (
						<p className='mt-2 text-sm text-muted-foreground'>{description}</p>
					)}
				</div>
				{link && linkTitle && (
					<Link
						href={link}
						className='text-primary hover:underline mt-2 md:mt-0'
					>
						{linkTitle}
					</Link>
				)}
			</div>

			<div className='mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 bg-foreground/10 rounded-lg p-6'>
				{products && products.length > 0 ? (
					products.map(product => (
						<ProductCard key={product.id} product={product} />
					))
				) : (
					<div className='col-span-full text-center text-muted-foreground'>
						Ничего не найдено
					</div>
				)}
			</div>
		</div>
	)
}
