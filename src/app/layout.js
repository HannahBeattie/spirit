import { VStack } from '@chakra-ui/react'
import Header from './base/components/Header'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
	title: 'Jemmas Facepainting and babysitting',
	description: 'Jemmas Facepainting and babysitting',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<VStack
						flex={'1'}
						alignItems={'stretch'}
						minW='100%vw'
						maxW={'100%vw'}
						spacing='0'
						bg={'white'}
						p={'0'}
						overflow={'hidden'}
					>
						<Header />

						{children}
					</VStack>
				</Providers>
			</body>
		</html>
	)
}
