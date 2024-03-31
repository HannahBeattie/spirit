import React from 'react'
import { GiLotus } from 'react-icons/gi'
import { HStack, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'

function Header() {
	return (
		<VStack bg={'white'} spacing={0} flex={1}>
			<HStack flex={1} p={2} px={6} width={'100vw'} color={'gray.500'} spacing={4}>
				<VStack spacing={1}>
					<GiLotus color='gray' fontSize={32} />
					<Heading
						fontWeight={200}
						color={'gray.300'}
						fontFamily={'Satisfy'}
						fontSize={'3xl'}
					>
						Name
					</Heading>
				</VStack>
				<Spacer />
				<Text>Meet *Name*</Text>
				<Text>FAQ</Text>
				<Text>Contact</Text>
			</HStack>
		</VStack>
	)
}

export default Header
