import Image from 'next/image'
import styles from './page.module.css'
import { GiLotus } from 'react-icons/gi'
import { HStack, Heading, Text, VStack } from '@chakra-ui/react'

export default function Home() {
	return (
		<main>
			<VStack flex={1} bg={'gray.600'} px={4} py={2} align={'start'}>
				<HStack flex={1} align={'start'}>
					<VStack spacing={0}>
						<GiLotus fontSize={32} />
						<Heading fontFamily={'Satisfy'} fontSize={20}>
							name
						</Heading>
					</VStack>
				</HStack>
			</VStack>
		</main>
	)
}
