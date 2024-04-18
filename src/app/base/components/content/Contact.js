import { Button, Card, HStack, Heading, IconButton, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import StyledNextLink from '../../StyledNextLink'
import Link from 'next/link'
import CopyToClipboardButton from '../../CoppyToClipboard'

function Contact() {
	return (
		<VStack py={{ lg: 8 }}>
			<Heading fontSize={{ base: '3xl', lg: '4xl' }} fontFamily={'Caveat'} color={'gray.500'}>
				Contact
			</Heading>

			<Card p={4} bg={'gray.100'} color='white'>
				<VStack alignItems={'start'} flex={1}>
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
				</VStack>
			</Card>
		</VStack>
	)
}

export default Contact
