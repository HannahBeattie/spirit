import { Container, Heading, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Intro() {
	return (
		<VStack>
			<Heading fontSize={'2xl'} letterSpacing={4} fontWeight={500} color={'#92b094'}>
				Welcome,
			</Heading>
			<Heading fontSize={'2xl'} letterSpacing={4} fontWeight={500} color={'#92b094'}>
				I am glad you are here.
			</Heading>
			<Spacer />
			<Container color={'gray.500'} fontWeight={500}>
				<VStack flex={1} align={'stretch'}>
					<Text>Discover serenity, balance, and renewal within our sacred space.</Text>
					<Text>
						Experience the gentle yet powerful healing of Reiki, tailored to restore
						harmony to your mind, body, and spirit.
					</Text>
					<Text>
						Explore our offerings and reach out to begin your journey toward inner peace
						and well-being.
					</Text>
					<Text>With love and light, [Healer&apos;s Name]</Text>
				</VStack>
			</Container>
			<Spacer />
		</VStack>
	)
}

export default Intro
