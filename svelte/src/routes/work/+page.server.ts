import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity';
import { image } from '~utils/groq';

export const load: PageServerLoad = async () => {
	const data = await client.fetch(`{
		'projects': *[_type == "projects"] | order(projectDate desc) {
			_id,
			projectName,
			slug {
				current
			},
			projectDate,
			cover {
				${image}
			},
			tags[]->{
				_id,
				name
			}
		},
	
		'tags': *[_type == "tags"] {
			_id,
			name
		},
	}
	`);

	if (data) {
		return data;
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
