import Head from 'next/head';
import { GetServerSideProps } from 'next';
import MainSection from '../src/sections/home/main';
import Futures from '../src/sections/home/futures';
import TotalSection from '../src/sections/home/total';
import SynthSection from 'src/sections/home/synths';
import { fetchTotalLocked } from '../src/lib/exchange-api';
import dynamic from 'next/dynamic';
import Ecosystem from 'src/sections/home/ecosystem';
import { BgGradient, Line } from 'src/styles/common';
import { PageLayout } from '../src/components';

export interface ApiStatsProps {
	totalLocked?: number;
}

const PoweredBy = dynamic(() => import('../src/sections/home/poweredBy'), {
	ssr: false,
});

const Home = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<PageLayout>
				<BgGradient />
				<MainSection />
				<Line />
				<TotalSection totalLocked={totalLocked} />
				<Line />
				<Futures />
				<Line />
				<SynthSection />
				<Line />
				<PoweredBy />
				<Ecosystem />
				<Line showOnMobile />
				{/*  TODO @125 Mike maybe wants to reposition this section so that is why we hide it for now 
				<PartnersSection /> */}
			</PageLayout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const totalLocked = await fetchTotalLocked();
	return {
		props: {
			totalLocked,
		},
	};
};

export default Home;
