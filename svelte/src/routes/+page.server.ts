import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity';

export const load: PageServerLoad = async () => {
	const data = await client.fetch(`*[_type == "homePage"][0] {
		title,
		body,
		media {
			type,
			video {
				format,
				public_id
			},
			image {
				asset {
					_ref
				}
			}
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
