import { Inter } from 'next/font/google'
import './globals.css'
import { ChakraProvider, VStack } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<ChakraProvider>
				<VStack
					flex={'1'}
					alignItems={'stretch'}
					as='body'
					minW='100vw'
					maxW={'100vw'}
					spacing='0'
					bg={'white'}
					p={'0'}
					overflowX={'hidden'}
				>
					<body className={inter.className}>{children}</body>
				</VStack>
			</ChakraProvider>
		</html>
	)
}
