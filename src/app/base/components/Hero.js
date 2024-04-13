import { Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Hero() {
	return (
		<Stack
			alignContent={'center'}
			justify={'center'}
			justifyItems={'center'}
			justifySelf={'center'}
			alignItems={'center'}
			direction={{ base: 'column', sm: 'row' }}
			flex={1}
			spacing={0}
			color={'black'}
		>
			<Container
				bg={'white'}
				pos={{ sm: 'absolute' }}
				right={0}
				p={8}
				opacity={'90%'}
				boxShadow='md'
				borderLeftRadius={{ sm: 20 }}
			>
				<Heading>There is no place like home.</Heading>
				<Text>Feel confident with real estate like no other.</Text>
				<Text>Another line of text here. Like this.</Text>
				<Text>And another goes here. It is some more text.</Text>
			</Container>
			<Image src={'/house.jpg'} alt='house'></Image>
		</Stack>
	)
}

export default Hero
