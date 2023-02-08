// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

// export {};

interface HomePageData {
	title: string;
	body: Array;
	media: {
		type: string;
		video: {
			format: string;
			public_id: string;
		};
	};
}

interface AboutPageData {
	title: string;
	body: Array;
	media: {
		type: string;
		video: {
			format: string;
			public_id: string;
		};
	};
}
