import { VStack } from '@chakra-ui/react'
import Hero from './base/components/Hero'
import Intro from './base/components/Intro'
import About from './base/components/About'

export default function Home() {
	// return null
	return (
		<VStack as={'main'} maxW={'100%vw'} overflow={'hidden'}>
			<Hero />
			<Intro />
			<About />
		</VStack>
	)
}
