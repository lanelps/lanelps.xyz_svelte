import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity';
import { media, seo } from '~utils/groq';

export const load: PageServerLoad = async () => {
	const data = await client.fetch(`*[_type == "aboutPage"][0] {
		title,
		body,
		${media},
		${seo}
	}`);

	if (data) {
		return data;
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
