import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity.server';
import { getMedia } from '~utils/helpers.server';
import { media, seo } from '~utils/groq';

export const load: PageServerLoad = async () => {
	const data = await client.fetch(`*[_type == "aboutPage"][0] {
		title,
		body,
		${media},
		${seo}
	}`);

	if (data) {
		return {
			...data,
			media: getMedia(data.media)
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
