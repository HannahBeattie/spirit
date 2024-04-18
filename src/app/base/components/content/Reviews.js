'use client'
import { Box, Image, IconButton, VStack, Text, Container, Card } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

const images = [
	{
		txt: 'Jemma is super professional, easy to deal with/communicate with and great with the kids!',
		auth: 'Lena Meehan ',
	},
	{
		txt: "Jemma was absolutely fantastic at my daughter's birthday party. All the kids and 'big kids' loved their facepaint...Thanks so much Jemma",
		auth: 'Kate McNabb',
	},
	{ txt: 'Jemma is amazing 😍 Nothing more i can say 😁', auth: 'Leah Marie Kerr' },
	{ txt: 'Jemma is amazing, her artwork is gorgeous ❤', auth: 'Sam Sam' },
	{ txt: 'what a awesome Lady. did such a good job', auth: 'Terri Cherie' },
	{
		txt: 'absolutely reccomend, did a amazing job with kiddies and adults',
		auth: 'Todd Kaspers',
	},
	{
		txt: 'Amazing work',
		auth: 'Jess Butson',
	},
]

function Reviews() {
	const [page, setPage] = useState(0)
	const controls = useAnimation()
	const autoplayInterval = 7000 // 3000 ms = 3 seconds

	const nextImageIndex = (current) => (current + 1) % images.length

	const paginate = (newDirection) => {
		// Fade out current images
		controls
			.start({
				opacity: 0,
				// transition: { ease: 'easeInOut' }, // Fade-out duration
			})
			.then(() => {
				// Update page index after fade out
				setPage((current) => (current + newDirection + images.length) % images.length)
			})
	}

	useEffect(() => {
		controls.start({
			opacity: [0.5, 1],
			transition: { ease: 'easeIn' }, // Fade-in duration
		})
	}, [page, controls])

	useEffect(() => {
		const interval = setInterval(() => {
			paginate(1) // Move right every 3 seconds
		}, autoplayInterval)

		return () => clearInterval(interval) // Clear interval on component unmount
	}, [])

	return (
		<Box position='relative' width='100%' overflow='hidden' zIndex={0} py={8}>
			<MotionBox
				display='flex'
				justifyContent='center'
				alignItems='center'
				width='100%'
				animate={controls}
				initial={{ opacity: 0 }}
				minH={'9rem'}
			>
				<Card bg='blackAlpha.50' p={4} minW={{ md: 700 }} minH={100}>
					<Container color={'black'}>
						<VStack>
							<Text fontFamily={'caveat'} fontSize={'2xl'}>
								&ldquo;{images[page].txt}&rdquo;
							</Text>
							<Text color={'gray.600'}>
								<i>- {images[page].auth}</i>
							</Text>
						</VStack>
					</Container>
				</Card>
			</MotionBox>
		</Box>
	)
}

export default Reviews
