import { ChakraProvider, VStack } from '@chakra-ui/react'
import './globals.css'
import Header from '../../components/Header'

export const metadata = {
	title: 'Hannah Joy',
	description: 'Hannah Joy Website',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<ChakraProvider>
				<VStack
					flex={'1'}
					alignItems={'stretch'}
					minW='100vw'
					maxW={'100vw'}
					spacing='0'
					bg={'white'}
					p={'0'}
					as={'body'}
					overflowX={'hidden'}
				>
					<Header />
					{children}
				</VStack>
			</ChakraProvider>
		</html>
	)
}
