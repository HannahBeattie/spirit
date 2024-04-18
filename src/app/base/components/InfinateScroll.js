'use client'
import { Box, Image, IconButton } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

const images = [
	{ src: '/gallery/1.jpg', alt: 'Face Painted Child 1' },
	{ src: '/gallery/2.jpg', alt: 'Face Painted Child 2' },
	{ src: '/gallery/3.jpg', alt: 'Face Painted Child 3' },
	{ src: '/gallery/4.jpg', alt: 'Face Painted Child 4' },
	{ src: '/gallery/6.jpg', alt: 'Face Painted Child 4' },
	{ src: '/gallery/7.jpg', alt: 'Face Painted Child 4' },
]

function InfiniteCarousel() {
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

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		paginate(1) // Move right every 3 seconds
	// 	}, autoplayInterval)

	// 	return () => clearInterval(interval) // Clear interval on component unmount
	// }, [])

	return (
		<Box position='relative' width='100%' overflow='hidden' zIndex={0}>
			<IconButton
				aria-label='Previous image'
				icon={<ChevronLeftIcon />}
				position='absolute'
				left='10px'
				top='50%'
				transform='translateY(-50%)'
				zIndex='2'
				onClick={() => paginate(-1)}
				bg={'gray.900'}
			/>
			<MotionBox
				display='flex'
				justifyContent='center'
				alignItems='center'
				width='100%'
				animate={controls}
				initial={{ opacity: 0 }}
			>
				<Image
					src={images[page].src}
					alt={images[page].alt}
					fit='cover'
					width={{ lg: '50%' }}
					height='auto'
				/>
				<Image
					display={{ base: 'none', lg: 'flex' }}
					src={images[nextImageIndex(page)].src}
					alt={images[nextImageIndex(page)].alt}
					fit='cover'
					width='50%'
					height='auto'
				/>
			</MotionBox>
			<IconButton
				aria-label='Next image'
				icon={<ChevronRightIcon />}
				position='absolute'
				right='10px'
				top='50%'
				bg={'gray.900'}
				transform='translateY(-50%)'
				zIndex='2'
				onClick={() => paginate(1)}
			/>
		</Box>
	)
}

export default InfiniteCarousel
