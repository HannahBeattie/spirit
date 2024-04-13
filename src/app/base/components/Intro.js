import { Container, Heading, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Intro() {
	return (
		<VStack color={'black'} p={8}>
			<Heading>A title here</Heading>
			<Spacer />
			<Container fontWeight={500}>
				<VStack flex={1} align={'stretch'}>
					<Text>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
						porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
						adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
						dolore magnam aliquam quaerat voluptatem.{' '}
					</Text>
				</VStack>
			</Container>
			<Spacer />
		</VStack>
	)
}

export default Intro
