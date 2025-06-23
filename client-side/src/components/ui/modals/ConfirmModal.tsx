import { PropsWithChildren } from 'react'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '../AlertDialog'

interface ConfirmModalProps {
	handleClick: () => void
}

export function ConfirmModal({
	children,
	handleClick
}: PropsWithChildren<ConfirmModalProps>) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
					<AlertDialogDescription>
						Это действие нельзя будет отменить.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className='w-1/4 cursor-pointer'>
						Закрыть
					</AlertDialogCancel>
					<AlertDialogAction
						className='w-1/4 bg-foreground'
						onClick={() => handleClick()}
					>
						Продолжить
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
