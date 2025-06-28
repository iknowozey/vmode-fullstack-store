'use client'

import { LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Loader } from '@/components/ui/Loader'
import { Skeleton } from '@/components/ui/Skeleton'
import { ToggleTheme } from '@/components/ui/ToggleTheme'
import { CreateStoreModal } from '@/components/ui/modals/CreateStoreModal'
import { DASHBOARD_URL, PUBLIC_URL, STORE_URL } from '@/config/url.config'
import { useProfile } from '@/hooks/useProfile'
import { HeaderCart } from './header-cart/HeaderCart'

export function HeaderMenu() {
  const { user, isLoading } = useProfile()

  return (
    <div className='hidden items-center gap-x-4 ml-auto lg:flex'>
      <HeaderCart />
      <Link href={PUBLIC_URL.explorer()}>
        <Button variant='ghost'>Каталог</Button>
      </Link>
      {isLoading ? (
        <>
          <div className='flex gap-x-7 items-center'>
            <Skeleton className='h-8 w-84' />
            <Loader size='default' />
          </div>
        </>
      ) : user ? (
        <>
          <Link href={DASHBOARD_URL.favorites()}>
            <Button variant='ghost'>Избранное</Button>
          </Link>
          {user.stores.length ? (
            <Link href={STORE_URL.home(user.stores[0].id)}>
              <Button variant='ghost'>Мои магазины</Button>
            </Link>
          ) : (
            <CreateStoreModal>
              <Button variant='ghost' asChild>
                Создать магазин
              </Button>
            </CreateStoreModal>
          )}
          <ToggleTheme />
          <Link href={DASHBOARD_URL.home()}>
          <div className='min-w-[40px]'>
						  <Image
              src={user.picture}
              alt={user.name}
              width={40}
              height={40}
              className='rounded-full'
            />
					</div>
          </Link>
        </>
      ) : (
        <Link href={PUBLIC_URL.auth()}>
          <Button variant='default'>
            <LogOut className='size-4 mr-2' />
            Войти
          </Button>
        </Link>
      )}
    </div>
  )
}