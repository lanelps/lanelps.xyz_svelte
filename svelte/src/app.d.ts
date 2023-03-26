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

// page data
interface SEO {
	title: string;
	description: string;
}

interface HomePageData {
	title: string;
	body: PortableTextBlock[];
	media: Media;
	seo: SEO;
}

interface AboutPageData {
	title: string;
	body: PortableTextBlock[];
	media: Media;
	seo: SEO;
}

interface WorkPageData {
	projects: {
		_id: string;
		projectName: string;
		projectDate: string;
		slug: {
			current: string;
		};
		cover: Image;
		tags: {
			_id: string;
			name: string;
		}[];
	}[];
	tags: {
		name: string;
	}[];
	seo: SEO;
}

interface ContactPageData {
	title: string;
	body: PortableTextBlock[];
	seo: SEO;
}

interface Project {
	_id: string;
	cover: Image;
	images: Image[];
	projectDate: string;
	projectDescription: PortableTextBlock[];
	projectName: string;
	role: string[];
	slug: {
		current: string;
	};
	team: string[];
	website: string;
	seo: SEO;
}

// objects
interface Media {
	type: string;
	image?: Image;
	video?: Video;
}

interface Image {
	_key?: string;
	_type?: string;
	asset: {
		_ref: string;
		_type?: string;
	};
	altText: string;
}

interface Video {
	format: string;
	public_id: string;
}

interface SendGridBody {
	personalizations: {
		to: {
			email: string;
		}[];
	}[];
	from: {
		email: string;
		name: string;
	};
	reply_to: {
		email: string;
		name: string;
	};
	subject: string;
	content: {
		type: string;
		value: string;
	}[];
}

// functions
type GetImageProps = (args: {
	/**
	 * The image's reference object.
	 * Example: {asset: {_ref: string}, hotspot: {...}, crop: {...} }
	 */
	image: Image;

	// Number of the largest width it can assume in the design
	// or "100vw" if it occupies the whole width
	maxWidth: number | string;

	/**
	 * The minimal width difference, in PERCENTAGE (decimal), between the image's srcSet variations.
	 *
	 * -> 0.10 (10%) by default.
	 */
	minimumWidthStep?: number;

	// List of width sizes to use in the srcSet (NON-RETINA)
	customWidthSteps?: number[];

	// Custom <img> element's `sizes` attribute
	sizes?: string;
}) => { src: string; srcset: string; sizes: string; width: number; height: number };

type GetImageDimensions = (
	image: Image
) => { width: number; height: number; aspectRatio: number } | undefined;

type GetCloudinaryVideoURL = (
	publicId: string,
	options: { format?: string; quality?: string; width?: number }
) => string;

// export {};
