import {
	Avatar,
	Button,
	Card,
	Container,
	HStack,
	Heading,
	Image,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'

function Contact() {
	return (
		<VStack py={12} flex={1}>
			<HStack>
				<Image shadow={'xl'} borderRadius={200} maxW={300} alt='healer' src='/face.jpg' />
				<VStack flex={1}>
					<Heading fontSize={'2xl'} letterSpacing={4} fontWeight={500} color={'#ebb513'}>
						Hello, my name is Hannah Joy
					</Heading>
					<Card bg={'white'} p={4}>
						<HStack>
							<VStack>
								<Container color={'gray.500'} fontWeight={500}>
									<Text>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
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
				</VStack>
			</HStack>
		</VStack>
	)
}

export default Contact
