import type { PageLoad } from './$types';

import { client } from '~utils/sanity';
import { image } from '~utils/groq';

export const load: PageLoad = async () => {
	const projects = await client.fetch(`*[_type == "projects"] | order(projectDate desc) {
		_id,
		projectName,
        slug {
            current
        },
        projectDate,
        cover {
            ${image}
        },
	}`);

	if (projects.length > 0) {
		return { projects };
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
