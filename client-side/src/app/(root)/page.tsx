import type { Metadata } from 'next'
import { Home } from './Home'

export const metadata: Metadata = {
	title: 'Ваш шопинг - в ваше удовольствие'
}

export default function HomePage() {
	return <Home />
}
