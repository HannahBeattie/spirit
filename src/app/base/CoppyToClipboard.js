'use client'
import React from 'react'
import { Button, HStack, Link, Text, useToast } from '@chakra-ui/react'
import { FaPhone } from 'react-icons/fa'

function CopyToClipboardButton() {
	const phoneNumber = '022 136 0284'
	const telNoSpace = phoneNumber.replaceAll(/ /g, '')

	return (
		<Link href={`tel:${telNoSpace}`}>
			<Button bg={'gray.900'} _hover={{ bg: 'gray.700' }}>
				<HStack>
					<FaPhone /> <Text fontFamily={'poppins'}>phone: {phoneNumber}</Text>
				</HStack>
			</Button>
		</Link>
	)
}

export default CopyToClipboardButton
