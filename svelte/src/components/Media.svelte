<script lang="ts">
	import { fly } from 'svelte/transition';

	import Video from '~components/Video.svelte';
	import Image from '~components/Image.svelte';

	//

	export let media: Media;
	export let loading: string;
	//

	$: ({ type, video, image } = media);
</script>

<figure
	class={`relative w-full rounded-lg overflow-hidden ${$$props?.class}`}
	in:fly={{ y: -400, duration: 600 }}
>
	{#if type == 'video' && video}
		<Video sources={[{ url: video?.url, type: video?.format }]} />
	{/if}

	{#if type == 'image' && image}
		<Image {image} {loading} />
	{/if}
</figure>
