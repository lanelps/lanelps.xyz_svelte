export const prerender = true;

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	console.log(`url`, url);
	return {
		url: url.pathname
	};
};
