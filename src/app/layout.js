import { VStack } from '@chakra-ui/react'
import './globals.css'
import Header from './base/components/Header'
import { Providers } from './providers'

export const metadata = {
	title: 'Real estate',
	description: 'Real estate',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<VStack
						flex={'1'}
						alignItems={'stretch'}
						minW='100vw'
						maxW={'100vw'}
						spacing='0'
						bg={'white'}
						p={'0'}
						overflowX={'hidden'}
					>
						<Header />
						{children}
					</VStack>
				</Providers>
			</body>
		</html>
	)
}
