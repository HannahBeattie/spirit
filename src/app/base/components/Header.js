'use client'

import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaPaintBrush } from 'react-icons/fa'
import {
	Box,
	Button,
	Center,
	HStack,
	Heading,
	IconButton,
	Image,
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
		// <motion.div
		// 	variants={{
		// 		visible: { y: 0 },
		// 		hidden: { y: '-100%' },
		// 	}}
		// 	animate={hidden ? 'hidden' : 'visible'}
		// 	transition={{ duration: 0.35, ese: 'easeInOut' }}
		// >
		<VStack flex={1} color={'black'} bg={'yellow.400'}>
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
						<Image
							shadow={'xl'}
							borderRadius={'200'}
							h={{ base: '3rem', sm: '5rem', md: '5rem', lg: '8rem' }}
							alt={'logo'}
							src={'/logo.jpg'}
						></Image>
					</VStack>
				</StyledNextLink>
				<Spacer />
				<VStack spacing={0}>
					<Text
						fontSize={{ base: 'xl', sm: '3xl', lg: '5xl' }}
						textAlign={'center'}
						fontFamily={'caveat'}
						color={'white'}
						fontWeight={600}
					>
						Jemma&apos;s Facepainting & Babysitting
					</Text>
					<HStack spacing={4} color={'white'} fontWeight={600}>
						<Text
							display={{ base: 'none', md: 'flex' }}
							fontSize={{ lg: 'xl' }}
							fontFamily={'poppins'}
						>
							<i>Make your events extra special!</i>
						</Text>
					</HStack>
				</VStack>
				<Spacer />

				{/* <Menu>
					<MenuButton
						pos={'absolute'}
						display={{ base: 'flex', md: 'none' }}
						as={IconButton}
						aria-label='Options'
						right={4}
						icon={<HamburgerIcon />}
						variant='outline'
					/>
					<MenuList>
						{pages.map(({ href, title }, idx) => (
							<StyledNextLink
								key={`navitem2-${idx}`}
								href={href}
								fontSize={{ md: 'lg' }}
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
							fontSize={{ md: 'lg' }}
							fontWeight={href === currentRoute ? '600' : '400'}
						>
							<Text>{title}</Text>
						</StyledNextLink>
					</Box>
				))} */}
			</HStack>
		</VStack>
		// </motion.div>
	)
}

export default Header
