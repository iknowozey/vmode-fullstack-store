import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/Sheet'
import { PUBLIC_URL } from '@/config/url.config'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'
import { formatPrice } from '@/lib/string/format-price'
import { CartItem } from './cart-item/CartItem'
import { useCheckout } from './useCheckout'

export function HeaderCart() {
  const router = useRouter()

  const { createPayment, isLoadingCreate } = useCheckout()
  const { user } = useProfile()

  const { items, total } = useCart()

  const handleClick = () => {
    user ? createPayment() : router.push(PUBLIC_URL.auth())
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost'>Корзина</Button>
      </SheetTrigger>
      <SheetContent className='h-full flex flex-col'>
        <SheetTitle>
          <Heading title='Корзина товаров' className='text-xl' />
        </SheetTitle>
        <div className='flex flex-col w-full flex-1'>
          {items.length ? (
            items.map(item => (
              <CartItem item={item} key={item.id} />
            ))
          ) : (
            <div className='text-lg text-center pt-100 text-muted-foreground'>В корзине пока пусто</div>
          )}
        </div>
        {items.length ? (
          <>
            <div className='text-lg font-medium'>
              Итого к оплате: {formatPrice(total)}
            </div>
            <Button
              onClick={handleClick}
              variant='default'
              disabled={isLoadingCreate}
            >
              Перейти к оплате
            </Button>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}