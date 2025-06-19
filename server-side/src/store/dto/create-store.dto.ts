import { IsNotEmpty, IsString } from 'class-validator'

export class CreateStoreDto {
	@IsString()
	@IsNotEmpty({
		message: 'Название обязательно'
	})
	title: string

	@IsString()
	@IsNotEmpty({ message: 'Описание обязательно' })
	description: string
}
