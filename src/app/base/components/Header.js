'use client'

import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
	Box,
	HStack,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { FaBuildingWheat } from 'react-icons/fa6'
import { NavItems } from './content/NavItems'
import StyledNextLink from '@/app/base/StyledNextLink'

const pages = NavItems

function Header() {
	const router = useRouter()
	const currentRoute = router.pathname

	return (
		<VStack bg={'black'} spacing={0} flex={1}>
			<HStack flex={1} p={2} px={6} w={'100vw'} color={'gray.500'} spacing={4}>
				<StyledNextLink href={'/'}>
					<VStack spacing={1}>
						<FaBuildingWheat color='white' fontSize={32} />
						<Heading
							fontWeight={300}
							color={'gray.100'}
							fontSize={{ base: 'md', lg: '3xl' }}
						>
							Real Estate
						</Heading>
					</VStack>
				</StyledNextLink>
				<Spacer />

				{pages.map(({ href, title }, idx) => (
					<Box key={`navitem-${idx}`} display={{ base: 'none', md: 'flex' }}>
						<StyledNextLink
							href={href}
							color={'white'}
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
