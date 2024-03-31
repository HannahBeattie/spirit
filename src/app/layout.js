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
					position={'fixed'}
					zIndex={-1}
					top={0}
					flex={1}
					minH={'100vh'}
					w={'100vw'}
					bg={'white'}
					color={'black'}
				>
					<body className={inter.className}>{children}</body>
				</VStack>
			</ChakraProvider>
		</html>
	)
}
