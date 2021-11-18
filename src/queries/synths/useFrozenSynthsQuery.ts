import compact from 'lodash/compact';
import { ethers } from 'ethers';
import { CurrencyKey } from 'src/constants/currency';
import getSNXJS from 'src/lib/snxjs';

export type FrozenSynths = Set<CurrencyKey>;

const useFrozenSynthsQuery = async () => {
	const snxjs = getSNXJS();
	// TODO #133
	let frozenSynths = [];
	try {
		frozenSynths = await snxjs.contracts.SynthUtil.frozenSynths();
	} catch (error) {}

	return new Set<CurrencyKey>([
		...compact(frozenSynths.map(ethers.utils.parseBytes32String)),
	] as CurrencyKey[]);
};

export default useFrozenSynthsQuery;
