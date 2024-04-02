import { VStack } from '@chakra-ui/react'
import Contact from '../../components/Contact'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'

export default function Home() {
	return (
		<VStack as={'main'}>
			<Hero />
			<Intro />
			<Contact />
		</VStack>
	)
}
