import { Container, HStack, Heading, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'

function About() {
	return (
		<Stack
			width={'100vw'}
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
				maxW={{ base: 200, md: 250 }}
				alt='Photo of Jemma'
				src='/jemma.jpg'
			/>

			<HStack>
				<VStack flex={1}>
					<Container color={'black'} fontWeight={500}>
						<Heading fontFamily={'Caveat'} pb={4} color={'yellow.500'}>
							Meet Jemma!
						</Heading>

						<Text fontFamily={'Poppins'} fontWeight={400}>
							Your go-to for peace of mind and fun-filled events! With years of police
							vetting and first aid training under her belt, Jemma brings safety and
							security to every occasion.
						</Text>
						<Text fontFamily={'Poppins'} fontWeight={400} mt={4}>
							But that&apos;s not all – her artistic flair shines through as she
							transforms little faces and adult faces into works of art. Whether you
							need a trustworthy babysitter or a talented face painter, Jemma&apos;s
							got you covered, ensuring both safety and smiles at every turn.
						</Text>
						<Text fontFamily={'Poppins'} fontWeight={400} mt={4}>
							Jemma is based in Upper Hutt, but able to travel within the wellington,
							wairarapa and kapiti coast areas.
						</Text>
					</Container>
					<Spacer />
				</VStack>
			</HStack>
		</Stack>
	)
}

export default About
