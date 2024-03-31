import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Hero() {
	return (
		<VStack flex={1} p={4}>
			<Image maxH={'500'} alt='image of crystals' src={'/crystals.jpg'}></Image>
			<Text>
				Photo by Olha Ruskykh:
				{/* https://www.pexels.com/photo/close-up-photo-of-crystal-stones-on-a-person-s-hand-6954663/ */}
			</Text>
		</VStack>
	)
}

export default Hero
