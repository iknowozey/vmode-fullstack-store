'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/Card'
import { Form } from '@/components/ui/form-elements/Form'
import { AuthFields } from './AuthFields'
import { Social } from './Social'
import { useAuthForm } from './useAuthForm'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReg)

	const { theme } = useTheme()

	const imageSrc =
		theme === 'dark' ? '/images/auth-dark.svg' : '/images/auth.svg'

	return (
		<div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
			<div className='h-full bg-foreground hidden lg:flex items-center justify-center'>
				<Image src={imageSrc} alt='vmode auth' width={500} height={500} />
			</div>
			<div className='h-full flex flex-col items-center justify-center'>
				<Card className='border-none p-6 flex flex-col items-center justify-center w-[620px]'>
					<CardHeader className='text-center w-full'>
						<CardTitle className='pb-1 text-3xl font-bold'>
							{isReg ? 'Создать аккаунт' : 'Войти в аккаунт'}
						</CardTitle>
						<CardDescription>
							Войдите или создайте учетную запись, чтобы совершать покупки
						</CardDescription>
					</CardHeader>
					<CardContent className='p-0 w-full'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-5'
							>
								<AuthFields form={form} isPending={isPending} isReg={isReg} />
								<Button className='w-full cursor-pointer' disabled={isPending}>
									Продолжить
								</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className='p-0 mt-4 text-sm text-muted-foreground'>
						{isReg ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
						<button
							className='ml-1 text-foreground cursor-pointer'
							onClick={() => setIsReg(!isReg)}
						>
							{isReg ? 'Войти' : 'Создать'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
