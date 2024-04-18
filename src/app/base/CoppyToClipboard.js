'use client'
import React from 'react'
import { Button, HStack, Text, useToast } from '@chakra-ui/react'
import { FaPhone } from 'react-icons/fa'

function CopyToClipboardButton() {
	const toast = useToast()

	const phoneNumber = '022 136 0284'

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(phoneNumber)
			toast({
				description: 'Phone number copied to clipboard.',
				status: 'success',
				duration: 2000,
				isClosable: true,
			})
		} catch (err) {
			toast({
				title: 'Error',
				description: 'Failed to copy phone number.',
				status: 'error',
				duration: 2000,
				isClosable: true,
			})
		}
	}

	return (
		<Button bg={'gray.900'} _hover={{ bg: 'gray.700' }} onClick={copyToClipboard}>
			<HStack>
				<FaPhone /> <Text fontFamily={'poppins'}>phone: {phoneNumber}</Text>
			</HStack>
		</Button>
	)
}

export default CopyToClipboardButton
