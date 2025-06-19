// src/order/order.service.ts
import { ICapturePayment, YooCheckout } from '@a2seven/yoo-checkout'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderDto } from './dto/order.dto'
import { PaymentStatusDto } from './dto/payment-status.dto'
import { EnumOrderStatus } from '../../generated/prisma'

const YOOKASSA_SHOP_ID = process.env['YOOKASSA_SHOP_ID']
const YOOKASSA_SECRET_KEY = process.env['YOOKASSA_SECRET_KEY']

if (!YOOKASSA_SHOP_ID || !YOOKASSA_SECRET_KEY) {
	throw new Error(
		'Отсутствуют переменные окружения YOOKASSA_SHOP_ID или YOOKASSA_SECRET_KEY. Пожалуйста, убедитесь, что они установлены в вашем .env файле.'
	)
}

const checkout = new YooCheckout({
	shopId: YOOKASSA_SHOP_ID,
	secretKey: YOOKASSA_SECRET_KEY
})

@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async createPayment(dto: OrderDto, userId: string) {
		const orderItems = dto.items.map(item => ({
			quantity: item.quantity,
			price: item.price,
			product: {
				connect: {
					id: item.productId
				}
			},
			store: {
				connect: {
					id: item.storeId
				}
			}
		}))

		const total = dto.items.reduce((acc, item) => {
			return acc + item.price * item.quantity
		}, 0)

		const order = await this.prisma.order.create({
			data: {
				status: dto.status,
				items: {
					create: orderItems
				},
				total,
				user: {
					connect: {
						id: userId
					}
				}
			}
		})

		if (!process.env.CLIENT_URL) {
			throw new InternalServerErrorException(
				'Переменная окружения CLIENT_URL не установлена.'
			)
		}

		const payment = await checkout.createPayment({
			amount: {
				value: total.toFixed(2),
				currency: 'RUB'
			},
			payment_method_data: {
				type: 'bank_card'
			},
			confirmation: {
				type: 'redirect',
				return_url: `${process.env.CLIENT_URL}/thanks`
			},
			description: `Оплата заказа в магазине vmode. Id платежи: #${order.id}`
		})

		return payment
	}

	async updateStatus(dto: PaymentStatusDto) {
		if (dto.event === 'payment.waiting_for_capture') {
			const capturePayment: ICapturePayment = {
				amount: {
					value: dto.object.amount.value,
					currency: dto.object.amount.currency
				}
			}

			return checkout.capturePayment(dto.object.id, capturePayment)
		}

		if (dto.event === 'payment.succeeded') {
			const orderIdMatch = dto.object.description?.split('#')[1]

			if (!orderIdMatch) {
				console.error(
					'Не удалось извлечь orderId из описания платежа:',
					dto.object.description
				)
				throw new InternalServerErrorException(
					'Неверный формат описания платежа для извлечения Order ID.'
				)
			}

			await this.prisma.order.update({
				where: {
					id: orderIdMatch
				},
				data: {
					status: EnumOrderStatus.PAYED
				}
			})

			return true
		}

		return true
	}
}
