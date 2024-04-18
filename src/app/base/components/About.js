import { Container, HStack, Heading, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'

function About() {
	return (
		<Stack
			width={'100vw'}
			bg={'yellow.500'}
			alignItems={'center'}
			flex={1}
			direction={{ base: 'column', md: 'row' }}
			color={'black'}
			alignContent={'center'}
			justify={'center'}
			alignSelf={'center'}
			p={8}
		>
			<Image
				borderRadius={200}
				shadow={'xl'}
				maxW={{ base: 200, md: 300 }}
				alt='Photo of Jemma'
				src='/jemma.jpg'
			/>

			<HStack>
				<VStack flex={1}>
					<Container color={'black'} fontWeight={500}>
						<Heading fontFamily={'Caveat'}>Meet Jemma!</Heading>

						<Text fontFamily={'Poppins'} fontWeight={400}>
							Your go-to for peace of mind and fun-filled events! With With years of
							police vetting and first aid training under her belt, Jemma brings
							safety and security to every occasion.
						</Text>
						<Text fontFamily={'Poppins'} fontWeight={400}>
							But that&apos;s not all – her artistic flair shines through as she
							transforms little faces and adult faces into works of art. Whether you
							need a trustworthy babysitter or a talented face painter, Jemmas got you
							covered, ensuring both safety and smiles at every turn.
						</Text>
					</Container>
					<Spacer />
				</VStack>
			</HStack>
		</Stack>
	)
}

export default About
