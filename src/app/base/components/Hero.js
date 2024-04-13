import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Hero() {
	return (
		<HStack flex={1} spacing={0} color={'black'}>
			<Container
				bg={'white'}
				pos={'absolute'}
				right={0}
				p={8}
				opacity={'90%'}
				boxShadow='md'
				borderLeftRadius={{ sm: 20 }}
			>
				<Heading fontSize={{ base: '3xl', sm: '5xl', lg: '6xl' }}>
					There is no place like home.
				</Heading>
				<Text>Feel confident with real estate like no other.</Text>
				<Text>Another line of text here. Like this.</Text>
				<Text>And another goes here. It is some more text.</Text>
			</Container>
			<Image src={'/house.jpg'} alt='house'></Image>
		</HStack>
	)
}

export default Hero
