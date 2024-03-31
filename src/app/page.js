import styles from './page.module.css'
import { GiLotus } from 'react-icons/gi'
import { HStack, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import Contact from '../../components/Contact'

export default function Home() {
	return (
		<main>
			<VStack>
				<Header />
				<Hero />
				<Intro />
				<Contact />
			</VStack>
		</main>
	)
}
