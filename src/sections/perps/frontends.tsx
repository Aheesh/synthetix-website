import {
	Flex,
	Text,
	FlexProps,
	Heading,
	Button,
	Link,
	Image,
	Icon,
	Hide,
	Show,
} from '@chakra-ui/react';

const FrontendCards = [
	{
		logo: <Image src="/polynomial.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Polynomial',
		description:
			'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power perps, and vaults. It is a one-stop solution built on top of Polynomial smart contract wallets.',
		link: 'https://trade.polynomial.fi/',
	},
	{
		logo: <Image src="/kwenta-frontend.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Kwenta',
		description:
			'Kwenta is a decentralized derivatives trading platform offering perpetual futures and options trading on Optimism. Gain exposure to a variety of crypto and real-world assets, and advanced tooling through Kwenta Smart Margin.',
		link: 'https://kwenta.eth.limo/dashboard/markets/',
	},
	{
		logo: <Image src="/decentrex.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Decentrex',
		description:
			'Decentrex is a decentralized perpetual futures exchange and leverage aggregator. On Decentrex, users have access to deep liquidity and lightning fast trades, thanks to the powerful infrastructure provided by Synthetix and Optimism.',
		link: 'https://decentrex.com/trade/ETH-USD',
	},
	{
		logo: <Image src="/dhedge.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'dHedge',
		description:
			'dHEDGE is a decentralized asset management protocol. It empowers users to access high-performing vaults managed by skilled asset managers. Asset managers can utilize sophisticated DeFi instruments like Kwenta perpetual futures and Lyra options to generate returns.',
		link: 'https://app.dhedge.org/#',
	},
	{
		logo: <Image src="/conduit.png" h={{ base: '40px', xl: '50px' }} />,
		name: 'Conduit',
		description:
			'Conduit is a community-centric, perpetual trading platform that provides a high performing, modular user experience. It introduces novel features that are intuitive to users, with Synthetix as the backbone. Your gateway to crypto trading.',
		link: 'https://alpha.conduit.lol/',
	},
	{
		logo: (
			<Image src="/synthetix-frontend.png" h={{ base: '40px', xl: '50px' }} />
		),
		name: 'Synthetix',
		description: [
			'Learn more about how to integrate Perps and other Synthetix markets in our developer documentation and reach out to the developers at ',
			'Synthetix Discord.',
		],
		link: 'https://docs.synthetix.io/integrations/perps-integration-guide',
	},
];

const FrontEnds = ({ ...props }: FlexProps) => {
	return (
		<Flex
			id="frontends-integrators"
			maxW={{
				base: '100vw',
				md: '48rem',
				lg: '62rem',
				xl: '80rem',
				'2xl': '96rem',
			}}
			flexDirection="column"
			alignItems="center"
			position="relative"
			width="100%"
			my={{ base: '62px', md: '100px' }}
			px={{ base: '16px', lg: '24px' }}
			{...props}
		>
			<Heading
				mb="16px"
				w="100%"
				fontSize={{ base: '36px', md: '48px' }}
				fontWeight={{ base: '700' }}
			>
				Integrators
			</Heading>
			<Text color="gray.500" w="100%">
				Multiple front ends have chosen to integrate Synthetix’ composable and
				permissionless smart contracts.
			</Text>
			<Flex
				w="100%"
				flexWrap="wrap"
				justifyContent={{ lg: 'flex-start' }}
				columnGap={{ lg: '16px', xl: '24px' }}
			>
				{FrontendCards.map((card, i) => (
					<FrontendCard {...card} key={card.name.concat(i.toString())} />
				))}
			</Flex>
		</Flex>
	);
};

function FrontendCard({
	logo,
	name,
	description,
	link,
}: {
	logo: JSX.Element;
	name: string;
	description: string | string[];
	link: string;
}) {
	return (
		<Flex
			flexDir="column"
			alignItems="flex-start"
			w={{ base: '100%', lg: '464px', xl: '394px', '2xl': '480px' }}
			height={{ base: '303px', md: '284px', lg: '356px', xl: '374px' }}
			bg="navy.900"
			borderWidth="1px"
			borderStyle="solid"
			borderRadius="base"
			borderColor="gray.900"
			mt={{ base: '16px', xl: '24px' }}
			p={{ base: '16px', md: '24px' }}
		>
			<Hide above="md">
				<Flex alignItems="center" h="40px" mb="16px">
					{logo}
					<Text
						my="16px"
						fontSize="lg"
						ml="16px"
						color="white"
						fontWeight={700}
					>
						{name}
					</Text>
				</Flex>
				<Text mb={{ base: 'auto' }} fontSize="16px" color="gray.500">
					{Array.isArray(description) ? (
						<>
							{description[0]}{' '}
							<Link href="mailto: perps@snxdao.io" color="cyan.500">
								perps@snxdao.io.
							</Link>
						</>
					) : (
						description
					)}
				</Text>
			</Hide>
			<Show above="md">
				{logo}
				<Heading my="16px" fontSize="18px">
					{name}
				</Heading>
				<Text
					mb={{ base: 'auto' }}
					fontSize="16px"
					lineHeight="24px"
					color="gray.500"
				>
					{Array.isArray(description) ? (
						<>
							{description[0]}{' '}
							<Link
								href="https://discord.com/channels/413890591840272394/459603818246701056"
								color="cyan.500"
							>
								{description[1]}
							</Link>
						</>
					) : (
						description
					)}
				</Text>
			</Show>
			<Button
				mt={{ lg: '16px' }}
				variant={name !== 'Synthetix' ? 'outline' : 'solid'}
				onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
				w={{ base: '100%', xl: '180px' }}
				size={{ base: 'lg', xl: 'sm' }}
				rightIcon={
					name === 'Synthetix' ? undefined : (
						<Icon
							width="14px"
							height="14px"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_4786_501)">
								<path
									d="M9.07952 4.47127L4.65444 4.47127L4.65445 3.30478L11.071 3.30478L11.071 9.7213L9.90448 9.7213L9.90448 5.29623L4.11717 11.325L3.29221 10.5001L9.07952 4.47127Z"
									fill="#00D1FF"
								/>
							</g>
							<defs>
								<clipPath id="clip0_4786_501">
									<rect width="14" height="14" fill="white" />
								</clipPath>
							</defs>
						</Icon>
					)
				}
			>
				{name !== 'Synthetix' ? `Visit ${name}` : 'Integrate with Synthetix'}
			</Button>
		</Flex>
	);
}

export default FrontEnds;
