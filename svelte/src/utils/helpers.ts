import { getCloudinaryVideoURL } from './cloudinary';
import { getImageProps } from '~utils/sanity';

export const parseFormData = (data: FormData) => {
	const newData: object = {};

	for (const key of data.keys()) {
		newData[key] = data.get(key);
	}

	return newData;
};

export const getMedia: GetMedia = (media) => {
	return {
		...media,
		image: media.image && {
			...media.image,
			url: getImageProps({
				image: media.image,
				maxWidth: 1200
			})
		},
		video: media.video && {
			...media.video,
			url: getCloudinaryVideoURL(media?.video?.public_id, {
				quality: `auto:best`,
				width: 1440
			})
		}
	};
};
