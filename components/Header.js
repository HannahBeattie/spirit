'use client'
import React from 'react'
import { GiLotus } from 'react-icons/gi'
import { Box, HStack, Heading, Link, MenuItem, Spacer, Text, VStack } from '@chakra-ui/react'
import StyledNextLink from '@/app/base/StyledNextLink'
import { NavItems } from './content/NavItems'
import { useRouter } from 'next/navigation'

const pages = NavItems

function Header() {
	const router = useRouter()
	const currentRoute = router.pathname

	return (
		<VStack bg={'white'} spacing={0} flex={1}>
			<HStack flex={1} p={2} px={6} w={'100vw'} color={'gray.500'} spacing={4}>
				<StyledNextLink href={'/'}>
					<VStack spacing={1}>
						<GiLotus color='gray' fontSize={32} />

						<Heading
							fontWeight={200}
							color={'gray.300'}
							fontFamily={'Satisfy'}
							fontSize={{ base: 'md', lg: '3xl' }}
						>
							Hannah Joy
						</Heading>
					</VStack>
				</StyledNextLink>
				<Spacer />
				{pages.map(({ href, title }, idx) => (
					<Box key={`navitem-${idx}`}>
						<StyledNextLink
							href={href}
							fontSize={{ md: 'lg' }}
							fontFamily={'SF Pro'}
							fontWeight={href === currentRoute ? '600' : '400'}
						>
							<Text>{title}</Text>
						</StyledNextLink>
					</Box>
				))}
			</HStack>
		</VStack>
	)
}

export default Header
