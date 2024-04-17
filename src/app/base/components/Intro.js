import { Container, Heading, List, ListItem, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Intro() {
	return (
		<VStack color={'black'} p={8}>
			<Heading fontFamily={'Caveat'}>Planning an event?</Heading>
			<Spacer />
			<Container fontFamily={'Poppins'} fontWeight={400}>
				<List>
					<ListItem>* Facepainting</ListItem>
					<ListItem>* Baby bumps</ListItem>
					<ListItem>* Uv reactive glow paints</ListItem>
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
