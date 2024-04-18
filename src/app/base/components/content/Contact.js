import {
	Box,
	Button,
	Card,
	Center,
	HStack,
	Heading,
	IconButton,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import StyledNextLink from '../../StyledNextLink'
import Link from 'next/link'
import CopyToClipboardButton from '../../CoppyToClipboard'

function Contact() {
	return (
		<Center pb={6}>
			<VStack alignItems={'start'}>
				<Text
					fontSize={{ base: '3xl', md: 'xl' }}
					fontFamily={'poppins'}
					color={'gray.500'}
				>
					Get in touch!
				</Text>
				<CopyToClipboardButton />
				<Link href={'mailto:emma_b_findlay@hotmail.com'} legacyBehavior>
					<Button bg={'gray.900'} _hover={{ bg: 'gray.700' }}>
						<HStack>
							<MdEmail />
							<Text fontFamily={'poppins'}>email: emma_b_findlay@hotmail.com</Text>
						</HStack>
					</Button>
				</Link>
			</VStack>
		</Center>
	)
}

export default Contact
