import type { PageLoad } from './$types';

import { client } from '~utils/sanity';
import { media } from '~utils/groq';

export const load: PageLoad = async () => {
	const data = await client.fetch(`*[_type == "aboutPage"][0] {
		title,
		body,
		${media},
	}`);

	if (data) {
		return data;
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
