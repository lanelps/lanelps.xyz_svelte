<script lang="ts">
	import { getCloudinaryVideoURL } from '~utils/cloudinary';

	import Video from '~components/Video.svelte';
	import Image from '~components/Image.svelte';

	//

	let className = '';
	export { className as class };

	export let media: Media;
	export let loading: string;
	//

	$: ({ type, video, image } = media);

	let source: any = image;

	$: if (type === `video` && video) {
		source = getCloudinaryVideoURL(video?.public_id, {
			// format: `auto`,
			quality: `auto:best`,
			width: 1440
		});
	}

	$: console.log(`source`, source);
</script>

<figure class={`${className} relative w-full`}>
	{#if type == 'video' && video}
		<Video sources={[{ url: source, type: video?.format }]} />
	{/if}

	{#if type == 'image' && image}
		<Image {image} {loading} />
	{/if}
</figure>
