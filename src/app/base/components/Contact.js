import {
	Avatar,
	Button,
	Card,
	Container,
	HStack,
	Heading,
	Image,
	Spacer,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react'
import { SP } from 'next/dist/shared/lib/utils'
import React from 'react'

function Contact() {
	return (
		<Stack flex={1} direction={{ base: 'column', md: 'row' }} color={'black'} pb={8}>
			<Image shadow={'xl'} maxW={{ md: 300 }} alt='key' src='/key2.jpg' />

			<Card
				bg={'white'}
				p={4}
				alignItems={'center'}
				justifySelf={'center'}
				justifyContent={'center'}
			>
				<HStack>
					<VStack flex={1}>
						<Container color={'black'} fontWeight={500}>
							<Heading textAlign={'center'}>More</Heading>
							<Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum.
							</Text>
						</Container>
						<Spacer />
						<Button
							shadow={'xl'}
							color={'white'}
							bg={'gray.400'}
							_hover={{ bg: 'gray.500' }}
							fontSize={'xl'}
							fontWeight={500}
						>
							Contact
						</Button>
					</VStack>
				</HStack>
			</Card>
		</Stack>
	)
}

export default Contact
