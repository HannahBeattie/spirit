import { Container, Heading, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Intro() {
	return (
		<VStack>
			<Heading fontSize={'2xl'} letterSpacing={4} fontWeight={500} color={'#ebb513'}>
				Welcome,
			</Heading>
			<Heading fontSize={'2xl'} letterSpacing={4} fontWeight={500} color={'#ebb513'}>
				I am glad you are here.
			</Heading>
			<Spacer />
			<Container color={'gray.500'} fontWeight={500}>
				<VStack flex={1} align={'stretch'}>
					<Text>
						Discover serenity, balance, and renewal with holistic life and buisness
						coaching.
					</Text>

					<Text>Reach out to begin your journey toward inner peace and well-being.</Text>
					<Text>With love and light, Hannah Joy.</Text>
				</VStack>
			</Container>
			<Spacer />
		</VStack>
	)
}

export default Intro
