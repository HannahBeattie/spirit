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
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

const pages = NavItems

function Header() {
	const router = useRouter()
	const currentRoute = router.pathname
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)
	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 150) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	return (
		<motion.div
			variants={{
				visible: { y: 0 },
				hidden: { y: '-100%' },
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.35, ese: 'easeInOut' }}
		>
			<VStack bg={'black'} flex={1}>
				<HStack
					alignContent={'end'}
					spacing={4}
					maxWidth={'100vw'}
					width={'100vw'}
					px={4}
					py={2}
					overflow={'hidden'}
				>
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
							display={{ base: 'flex', md: 'none' }}
							as={IconButton}
							aria-label='Options'
							right={0}
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
		</motion.div>
	)
}

export default Header
