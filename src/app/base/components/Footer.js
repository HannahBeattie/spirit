import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
	return (
		<HStack w={'100vw'} bg={'#98ba8a'} p={4}>
			<Text fontSize={'sm'}>
				© 2024 JFAB - <i>Jemmas Facepainting And Babysitting all rights reserved</i>
			</Text>
		</HStack>
	)
}

export default Footer
