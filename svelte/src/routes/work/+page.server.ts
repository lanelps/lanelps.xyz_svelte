import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity.server';
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
		return {
			...data,
			seo: {
				title: 'Work',
				description:
					'From portfolio websites to interactive web apps. I specialize in creating bespoke and unique frontend designs and user interactions for the web, using popular JavaScript frameworks and libraries like SvelteKit, Gatsby, and React.js. See for yourself.'
			}
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
