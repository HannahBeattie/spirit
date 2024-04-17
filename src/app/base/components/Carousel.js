'use client'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Image } from '@chakra-ui/react'

// const items = images.map((quoteProps, idx) => <QuoteSlide key={`quote-${idx}`} {...quoteProps} />)

const imgs = [
	{ src: 'public/jemma.jpg', alt: 'test' },
	{ src: 'public/jemma.jpg', alt: 'test' },
	{ src: 'public/jemma.jpg', alt: 'test' },
	{ src: 'public/jemma.jpg', alt: 'test' },
]

function Carousel() {
	return (
		<AliceCarousel
			autoPlay
			autoPlayStrategy='none'
			autoPlayInterval={6000}
			animationDuration={1000}
			infinite
			touchTracking
			disableButtonsControls
			items={imgs.map(({ src, alt }, idx) => (
				<Image key={`slide-${idx}`} src={src} alt={alt} />
			))}
		/>
	)
}

export default Carousel
