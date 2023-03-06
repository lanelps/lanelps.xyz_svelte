<script lang="ts">
	import { fly } from 'svelte/transition';
	import { getCloudinaryVideoURL } from '~utils/cloudinary';

	import Video from '~components/Video.svelte';
	import Image from '~components/Image.svelte';

	//

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
</script>

<figure class={`relative w-full ${$$props?.class}`} in:fly={{ y: -400, duration: 600 }}>
	{#if type == 'video' && video}
		<Video sources={[{ url: source, type: video?.format }]} />
	{/if}

	{#if type == 'image' && image}
		<Image {image} {loading} />
	{/if}
</figure>
