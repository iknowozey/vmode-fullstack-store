// src/components/ui/modals/CreateStoreModal.tsx
import { type PropsWithChildren, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateStore } from '@/hooks/queries/stores/useCreateStore'
import { IStoreCreate } from '@/shared/types/store.interface'
import { Button } from '../Button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../Dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../form-elements/Form'
import { Input } from '../form-elements/Input'

export function CreateStoreModal({ children }: PropsWithChildren<unknown>) {
	const [isOpen, setIsOpen] = useState(false)

	const { createStore, isLoadingCreate } = useCreateStore()

	const form = useForm<IStoreCreate>({
		mode: 'onChange',
		defaultValues: {
			title: '',
			description: ''
		}
	})

	const onSubmit: SubmitHandler<IStoreCreate> = async data => {
		try {
			await createStore(data)
			setIsOpen(false)
			form.reset()
		} catch (error) {
			console.error('Ошибка при создании магазина:', error)
		}
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger className='w-full'>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Создание магазина</DialogTitle>
					<DialogDescription>
						Для создания магазина необходимо указать название
					</DialogDescription>{' '}
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4'
					>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Название обязательно'
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Краткое название Вашего магазина
									</FormLabel>
									<FormControl>
										<Input
											placeholder='Введите здесь название'
											disabled={isLoadingCreate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='description'
							rules={{
								required: 'Описание обязательно',
								minLength: {
									value: 5,
									message: 'Минимум 6 символов'
								}
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Краткое описание Вашего магазина
									</FormLabel>
									<FormControl>
										<Input
											placeholder='А здесь введите краткое описание'
											disabled={isLoadingCreate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							className='w-full'
							variant='default'
							disabled={isLoadingCreate}
						>
							Создать
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
