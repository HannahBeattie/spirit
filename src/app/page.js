import { VStack } from '@chakra-ui/react'
import Contact from './base/components/Contact'
import Header from './base/components/Header'
import Hero from './base/components/Hero'
import Intro from './base/components/Intro'

export default function Home() {
	// return null
	return (
		<VStack as={'main'} maxW={'100%vw'} overflow={'hidden'}>
			<Hero />
			<Intro />
			<Contact />
		</VStack>
	)
}
