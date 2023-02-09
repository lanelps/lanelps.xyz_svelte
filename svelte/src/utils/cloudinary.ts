import { PUBLIC_CLOUDINARY_NAME } from '$env/static/public';
import { Cloudinary } from '@cloudinary/url-gen';
import { quality, format } from '@cloudinary/transformation-builder-sdk/actions/delivery';
import { limitFit } from '@cloudinary/transformation-builder-sdk/actions/resize';

const cld = new Cloudinary({
	cloud: {
		cloudName: PUBLIC_CLOUDINARY_NAME
	},
	url: {
		secure: true
	}
});

export const getCloudinaryVideoURL = (publicId: string, options) => {
	let myVideo = cld?.video(publicId);

	if (options?.width) {
		myVideo = myVideo.resize(limitFit().width(options.width));
	}
	if (options?.quality) {
		myVideo = myVideo.delivery(quality(options.quality));
	}
	if (options?.format) {
		myVideo = myVideo.delivery(format(options.format));
	}

	return myVideo?.toURL();
};
