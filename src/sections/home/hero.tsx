import { Box, Button, Flex, Text } from '@chakra-ui/react';
import SNXPerpsLooper from 'src/svg/SNXPerpsLooper';

export const Hero = () => {
	let onClick = () => {};

	if (typeof window !== 'undefined') {
		onClick = () => {
			const ecosystem = document.getElementById('ecosystem');
			if (ecosystem) {
				ecosystem.scrollIntoView({ behavior: 'smooth' });
			}
		};
	}

	return (
		<Flex pt="182px" position="relative" width="100%" id="hero">
			<Flex
				flexDirection="column"
				justifyContent="center"
				maxWidth="50%"
				height="100%"
				pb={20}
				zIndex={1}
			>
				<Box width="600px">
					<Text
						as="h2"
						textStyle="heading-4xl"
						color="gray.50"
						mb="16px"
						width="500px"
					>
						The Liquidity Layer of DeFi
					</Text>
				</Box>
				<Text
					mb="24px"
					fontSize="16px"
					lineHeight="24px"
					color="gray.500"
					fontFamily="heading"
					fontWeight={400}
					width="625px"
				>
					Synthetix provides liquidity for permissionless derivatives like
					perpetual futures, options, parimutuel markets, and more across EVM
					chains. Powering the next generation of permissionless protocols.
				</Text>
				<Button
					gap="8px"
					p="10px 16px"
					borderRadius="4px"
					width="fit-content"
					onClick={onClick}
				>
					Explore Ecosystem
				</Button>
			</Flex>
			<SNXPerpsLooper
				transform={{
					// TODO: Confirm sizing for base and md
					base: 'translate(-50%, 10%)',
					md: 'translate(-50%, 0%)',
					lg: 'translate(-5%, -15%)',
				}}
				top="-30px"
				left="50%"
				position={{ base: 'absolute' }}
				zIndex={0}
			/>
		</Flex>
	);
};
