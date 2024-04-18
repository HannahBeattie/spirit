'use client'
import { useRef, useCallback, useState, useEffect } from 'react'
import { VStack, IconButton, Button, Tooltip, Text, HStack } from '@chakra-ui/react'
import { FaDownLong } from 'react-icons/fa6'
import Contact from './base/components/content/Contact'
import Hero from './base/components/Hero'
import Intro from './base/components/Intro'
import About from './base/components/About'
import InfiniteCarousel from './base/components/InfinateScroll'

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
					bg={'gray.900'}
					_hover={{ bg: 'gray.700' }}
					color={'white'}
					onClick={executeScroll}
					fontFamily={'Caveat'}
				>
					<HStack>
						<Text>Contact</Text>
						<FaDownLong color='white' />
					</HStack>
				</Button>
			)}
			<InfiniteCarousel />
			{/* Element to scroll to */}
			<div ref={myRef}>Element to scroll to</div>
			<Contact />
		</VStack>
	)
}
