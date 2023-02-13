import type { PageLoad } from './$types';

import { client } from '~utils/sanity';
import { image } from '~utils/groq';

export const load: PageLoad = async ({ params }) => {
	const data = await client.fetch(
		`*[_type == "projects" && slug.current == $slug][0] {
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
	}`,
		{ slug: params?.slug }
	);

	if (data) {
		return data;
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
