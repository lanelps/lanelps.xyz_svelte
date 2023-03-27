import { getCloudinaryVideoURL } from '~utils/cloudinary.server';
import { getImageProps } from '~utils/sanity.server';

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
