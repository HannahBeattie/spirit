'use client'

import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Center,
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
import { GiHamburgerMenu } from 'react-icons/gi'

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
				<Menu>
					<MenuButton
						pos={'absolute'}
						right={8}
						display={{ base: 'flex', md: 'none' }}
						as={IconButton}
						aria-label='Options'
						icon={<HamburgerIcon />}
						variant='outline'
					/>
					<MenuList>
						{pages.map(({ href, title }, idx) => (
							<StyledNextLink
								key={`navitem2-${idx}`}
								href={href}
								color={'white'}
								fontSize={{ md: 'lg' }}
								fontFamily={'SF Pro'}
								fontWeight={href === currentRoute ? '600' : '400'}
							>
								<MenuItem>{title}</MenuItem>
							</StyledNextLink>
						))}
					</MenuList>
				</Menu>
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
