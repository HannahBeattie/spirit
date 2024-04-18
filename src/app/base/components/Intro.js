import { Container, Divider, Heading, List, ListItem, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Intro() {
	return (
		<VStack color={'black'} p={8}>
			<Heading fontSize={{ base: '3xl', md: '4xl' }} fontFamily={'Caveat'} color={'98ba8a'}>
				Planning an event?
			</Heading>
			<Spacer />
			<Container fontFamily={'Poppins'} fontWeight={400}>
				<Text pb={4}>
					Welcome to Jemma&apos;s Facepainting and Babysitting – where your party and
					childcare needs come to life with a splash of color! Based in Wellington,
					Jemma&apos;s offers a dual delight of professional face and body painting
					alongside top-notch babysitting services, perfect for any event or gathering.
				</Text>

				<List>
					<ListItem>* Facepainting</ListItem>
					<ListItem>* Baby bumps</ListItem>
					<ListItem>* UV reactive glow paints</ListItem>
					<ListItem>* Christmas parties</ListItem>
					<ListItem>* Halloween parties</ListItem>
					<ListItem>* Birthday parties</ListItem>
					<ListItem>* Stag dos and hens nights with some cheeky art available </ListItem>
				</List>
			</Container>

			<Spacer />
		</VStack>
	)
}

export default Intro
