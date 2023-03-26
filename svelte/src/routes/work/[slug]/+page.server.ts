import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity';
import { image, seo } from '~utils/groq';

export const load: PageServerLoad = async ({ params }) => {
	const data = await client.fetch(
		`*[_type == "projects" && slug.current == $slug][0] {
            _id,
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
            },
            ${seo}
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
