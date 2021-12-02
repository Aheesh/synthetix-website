import { synthetix, Config, SynthetixJS } from '@synthetixio/contracts-interface';
import { providers } from 'ethers';
import { DEFAULT_NETWORK_ID } from 'src/constants/defaults';

const initSnxJS = (config: Config) => synthetix(config);

let snxjs: SynthetixJS;

const getSNXJS = (config?: Config) => {
	if (config || !snxjs) {
		snxjs = initSnxJS({
			networkId: DEFAULT_NETWORK_ID,
			provider: new providers.InfuraProvider(config?.networkId || DEFAULT_NETWORK_ID, {
				projectId: process.env.NEXT_INFURA_PROJECT_ID,
				projectSecret: process.env.NEXT_INFURA_PROJECT_SECRET,
			}),
			...config,
		});
	}
	return snxjs;
};

export default getSNXJS;
