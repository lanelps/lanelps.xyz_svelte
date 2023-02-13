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

// objects
interface HomePageData {
	title: string;
	body: PortableTextBlock[];
	media: Media;
}

interface AboutPageData {
	title: string;
	body: PortableTextBlock[];
	media: Media;
}

interface WorkPageData {
	projects: Project[];
}

interface Project {
	cover: Image;
	images: Image[];
	projectDescription: PortableTextBlock[];
	projectDate: string;
	website: string;
	role: string[];
	team: string[];
	cover: Image;
	images: Image[];
}

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
