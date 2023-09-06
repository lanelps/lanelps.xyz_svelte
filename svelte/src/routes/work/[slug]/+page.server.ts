import type { PageServerLoad } from './$types';

import { client } from '~utils/sanity.server';
import { getMedia } from '~utils/helpers.server';
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
			techStack,
            images[] {
                ${image}
            },
            ${seo}
	    }`,
		{ slug: params?.slug }
	);

	if (data) {
		return {
			...data,
			images: data.images.map((image: Image) => ({
				_key: image?._key,
				...getMedia({ type: 'image', image })
			}))
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
