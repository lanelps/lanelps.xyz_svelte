import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapterCloudflare(),
		alias: {
			'~assets': path.resolve('./src/assets'),
			'~components': path.resolve('./src/components'),
			'~utils': path.resolve('./src/utils')
		}
	}
};

export default config;
