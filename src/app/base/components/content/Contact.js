import {
	Box,
	Button,
	Card,
	Center,
	HStack,
	Heading,
	IconButton,
	Image,
	Link,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import StyledNextLink from '../../StyledNextLink'
import NextLink from 'next/link'
import CopyToClipboardButton from '../../CoppyToClipboard'

function Contact() {
	return (
		<Center pt={10}>
			<HStack>
				<Image
					display={{ base: 'none', md: 'flex' }}
					maxH={'30rem'}
					alt={'child facepainted as a dino'}
					src={'/dino.png'}
				/>

				<VStack alignItems={'start'} pb={10} px={8}>
					<Text
						fontSize={{ base: '3xl', md: '4xl' }}
						fontFamily={'caveat'}
						color={'black'}
						fontWeight={600}
						pb={2}
					>
						Get in touch!
					</Text>
					<CopyToClipboardButton />
					<Link href={'mailto:emma_b_findlay@hotmail.com'} legacyBehavior>
						<Button bg={'gray.900'} _hover={{ bg: 'gray.700' }}>
							<HStack>
								<MdEmail />
								<Text fontFamily={'poppins'}>
									email: emma_b_findlay@hotmail.com
								</Text>
							</HStack>
						</Button>
					</Link>

					<Link isExternal target='_blank'>
						<NextLink
							href={
								'https://www.facebook.com/jemmasfacepaintingandbabysitting/photos'
							}
							legacyBehavior
							passHref
						>
							<Button bg={'gray.900'} _hover={{ bg: 'gray.700' }}>
								<HStack>
									<FaFacebook />
									<Text fontFamily={'poppins'}>facebook</Text>
								</HStack>
							</Button>
						</NextLink>
					</Link>
				</VStack>
			</HStack>
		</Center>
	)
}

export default Contact
