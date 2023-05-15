import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import LinkOffIcon from 'src/svg/LinkOffIcon';
import SNXPerpsLooper from 'src/svg/SNXPerpsLooper';

export default function FuturesMain() {
	return (
		<Flex
			position="relative"
			as="section"
			w="100%"
			height={{ base: 'auto' }}
			bg="navy.900"
			wrap={{ base: 'wrap-reverse', xl: 'nowrap' }}
			mb={{ base: '62px', md: '100px' }}
		>
			<Flex
				w={{ base: '100%', lg: '600px' }}
				flexDir="column"
				p={{ base: 0 }}
				mt={{ base: '400px', md: '533px', lg: '550px', xl: '184px' }}
			>
				<Heading
					fontWeight={{ base: '700', md: '800' }}
					fontSize={{ base: '48px', md: '60px' }}
					lineHeight={{ base: '57px', md: '72px' }}
					mb="24px"
					// In case the text overflows into the picture
					zIndex={2}
				>
					Decentralized <br /> Perpetual <br /> Futures
				</Heading>
				<Text
					fontSize={{ base: 'md' }}
					lineHeight={{ base: '20px', md: '24px' }}
					fontWeight={400}
					color="gray.500"
					w={{ base: '100%' }}
					mb={{ base: '16px', md: '24px' }}
				>
					Synthetix Perps offers integrators deep liquidity, low fees and
					additional resources for building your own frontend.
				</Text>
				<Flex>
					<Button
						mr="24px"
						w={{ base: '100%' }}
						size={{ base: 'lg', xl: 'md' }}
						onClick={() => {
							document
								.querySelector('#frontends-integrators')
								?.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						See Integrators
					</Button>
					<Button
						size={{ base: 'lg', xl: 'md' }}
						w={{ base: '100%' }}
						variant="outline"
						colorScheme="gray"
						rightIcon={<LinkOffIcon white />}
						onClick={() =>
							window.open(
								'https://watcher.synthetix.io/',
								'_blank',
								'noopener noreferrer',
							)
						}
					>
						See Perps Stats
					</Button>
				</Flex>
			</Flex>
			<SNXPerpsLooper
				transform={{
					base: 'translate(-50%, -10%)',
					md: 'translate(-50%, 10%)',
					lg: 'translate(-50%, -20%)',
					xl: 'translate(-5%, -20%)',
				}}
				top="-30px"
				left="50%"
				position={{ base: 'absolute' }}
			/>
		</Flex>
	);
}
