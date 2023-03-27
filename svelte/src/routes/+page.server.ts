import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity';
import { getMedia } from '~utils/helpers';
import { seo } from '~utils/groq';

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
