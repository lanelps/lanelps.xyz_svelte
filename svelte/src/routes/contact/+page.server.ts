import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity';

export const load: PageServerLoad = async () => {
	const data = await client.fetch(`*[_type == "contactPage"][0] {
		title,
		body,
	}`);

	if (data) {
		return data;
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
