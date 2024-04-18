import { Container, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Hero() {
	return (
		<Stack
			maxW={'100vw'}
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
			<VStack overflow={'hidden'}>
				<Image src={'/banner2.jpg'} alt='photos of face painted children'></Image>
			</VStack>
		</Stack>
	)
}

export default Hero
