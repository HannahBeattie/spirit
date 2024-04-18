'use client'
import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaDownLong } from 'react-icons/fa6'
import About from './base/components/About'
import Hero from './base/components/Hero'
import InfiniteCarousel from './base/components/InfinateScroll'
import Intro from './base/components/Intro'
import Contact from './base/components/content/Contact'
import Reviews from './base/components/content/Reviews'
import { MdContactPage } from 'react-icons/md'
import Footer from './base/components/Footer'

export default function Home() {
	const myRef = useRef(null)
	const [isVisible, setIsVisible] = useState(true)

	const executeScroll = useCallback(() => {
		myRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [])

	useEffect(() => {
		const checkIfBottom = () => {
			// Calculate if the user is at the bottom of the page
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				setIsVisible(false) // Hide button
			} else {
				setIsVisible(true) // Show button
			}
		}

		window.addEventListener('scroll', checkIfBottom)

		return () => {
			window.removeEventListener('scroll', checkIfBottom)
		}
	}, [])

	return (
		<VStack as={'main'} maxW={'100%vw'} overflow={'hidden'} spacing={0}>
			<Hero />
			<Intro />
			<About />
			{isVisible && (
				<Button
					zIndex={2}
					position={'fixed'}
					bottom={8}
					right={4}
					bg={'yellow.500'}
					_hover={{ bg: 'gray.700' }}
					color={'white'}
					onClick={executeScroll}
					fontFamily={'Caveat'}
					borderRadius={200}
				>
					<HStack>
						<Text>Contact</Text>
					</HStack>
				</Button>
			)}

			<Reviews />
			<InfiniteCarousel />
			{/* Element to scroll to */}
			<div ref={myRef}>Element to scroll to</div>

			<Contact />
			<Footer />
		</VStack>
	)
}
