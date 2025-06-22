'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SITE_NAME } from '@/constants/seo.constants'

export const LogoClient = () => {
	const { theme, systemTheme } = useTheme()
	const [currentImageSrc, setCurrentImageSrc] = useState('/images/logo.svg')

	useEffect(() => {
		const resolvedTheme = theme === 'system' ? systemTheme : theme
		const newImageSrc =
			resolvedTheme === 'dark'
				? '/images/logo-dark.svg'
				: '/images/logo.svg'
		setCurrentImageSrc(newImageSrc)
	}, [theme, systemTheme])
	return (
		<>
			<Image
				src={currentImageSrc}
				alt={SITE_NAME}
				width={25}
				height={25}
			/>
		</>
	)
}
