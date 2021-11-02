import Head from 'next/head';
import { GetServerSideProps } from 'next';

import ipRangeCheck from 'ip-range-check';

import MainSection from '../src/sections/home/main';
import Futures from '../src/sections/home/futures';
import TotalSection from '../src/sections/home/total';
import SynthSection from 'src/sections/home/synths';

import { Layout } from '../src/components';
import { fetchTotalLocked } from '../src/lib/exchange-api';

export interface ApiStatsProps {
	totalLocked?: number;
}

const Home = ({ totalLocked }: ApiStatsProps) => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
			</Head>
			<Layout>
				<MainSection />
				<TotalSection totalLocked={totalLocked} />
				<Futures />
				<SynthSection />
				{/* Maik maybe wants to reposition this section so that is why we hide it for now 
				<PartnersSection /> */}
			</Layout>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (process.env.CF_IP) {
		const allowedIps = JSON.parse(`[${process.env.CF_IP}]`);
		const ip = context.req.headers['x-forwarded-for'] || context.req.connection.remoteAddress;
		if (typeof ip === 'string' && ipRangeCheck(ip, allowedIps)) {
			const props = await getProps();
			return props;
		} else {
			context.res.statusCode = 403;
			context.res.end('Your IP is not whitelisted.');
			return { props: {} };
		}
	} else {
		const props = await getProps();
		return props;
	}
	async function getProps() {
		const totalLocked = await fetchTotalLocked();
		return {
			props: {
				totalLocked,
			},
		};
	}
};

export default Home;
