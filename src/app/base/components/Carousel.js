'use client'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Box, Center, HStack, Image, VStack } from '@chakra-ui/react'

// const items = images.map((quoteProps, idx) => <QuoteSlide key={`quote-${idx}`} {...quoteProps} />)

const imgs = [
	{ src: '/gallery/1.jpg', alt: 'face painted child' },
	{ src: '/gallery/2.jpg', alt: 'face painted child' },
	{ src: '/gallery/3.jpg', alt: 'face painted child' },
	{ src: '/gallery/4.jpg', alt: 'face painted child' },
	{ src: '/gallery/1.jpg', alt: 'face painted child' },
	{ src: '/gallery/2.jpg', alt: 'face painted child' },
]

function Carousel() {
	return (
		<HStack flex={1}>
			<AliceCarousel
				autoPlay
				autoHeight={false}
				autoPlayStrategy='none'
				autoPlayInterval={6000}
				animationDuration={1000}
				infinite
				touchTracking
				disableButtonsControls
				items={imgs.map(({ src, alt }, idx) => (
					<Image flex={1} maxH={'16rem'} key={`slide-${idx}`} src={src} alt={alt} />
				))}
			/>
		</HStack>
	)
}

export default Carousel
