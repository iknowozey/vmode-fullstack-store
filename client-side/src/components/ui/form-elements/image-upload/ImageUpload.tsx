import { ImagePlus } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../../Button'
import { useUpload } from './useUpload'
import { cn } from '@/lib/utils'

interface ImageUploadProps {
	isDisabled: boolean
	onChange: (value: string[]) => void
	value: string[]
}

export function ImageUpload({ isDisabled, onChange, value }: ImageUploadProps) {
	const { handleButtonClick, isUploading, fileInputRef, handleFileChange } =
		useUpload(onChange)

	return (
		<div>
			<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5'>
				{value.map(url => (
					<div
						key={url}
						className='relative w-[200px] h-[200px] rounded-md overflow-hidden'
					>
						<Image src={url} alt='Картинка' fill className='object-cover' />
					</div>
				))}
			</div>
			<Button
				type='button'
				disabled={isDisabled || isUploading}
				variant='secondary'
				onClick={handleButtonClick}
				className={cn(' px-5 py-5', {
					'mt-4': value.length
				})}
			>
				<ImagePlus className='text-foreground w-4 h-4 mr-2' />
				Загрузить картинки
			</Button>
			<input
				type='file'
				multiple
				className='hidden'
				ref={fileInputRef}
				onChange={handleFileChange}
				disabled={isDisabled}
			/>
		</div>
	)
}
