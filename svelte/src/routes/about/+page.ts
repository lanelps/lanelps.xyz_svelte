import type { PageLoad } from './$types';

import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'k2d93j2x',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});

export const load: PageLoad = async () => {
	const data = await client.fetch(`*[_type == "aboutPage"][0] {
		title,
		body,
		media {
			type,
			video {
				format,
				public_id
			},
		},
	}`);

	if (data) {
		return data;
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
