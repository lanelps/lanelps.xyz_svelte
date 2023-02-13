import type { PageLoad } from './$types';

import { client } from '~utils/sanity';
import { image } from '~utils/groq';

export const load: PageLoad = async () => {
	const projects = await client.fetch(`*[_type == "projects"] {
		projectName,
        slug {
            current
        },
        projectDescription,
        projectDate,
        website,
        role,
        team,
        cover {
            ${image}
        },
        images[] {
            ${image}
        }
	}`);

	if (projects.length > 0) {
		return { projects };
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
