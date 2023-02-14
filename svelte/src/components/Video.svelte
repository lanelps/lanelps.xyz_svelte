<script lang="ts">
	import { onMount } from 'svelte';

	//

	export let autoplay = true,
		muted = true,
		loop = true,
		sources: [{ url: string; type: string }];

	let ref: HTMLVideoElement;
	let loaded: boolean = false;

	//

	onMount(() => {
		if (muted) {
			// open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
			ref.defaultMuted = true;
			ref.muted = true;
			ref.play();
		}
	});
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
	bind:this={ref}
	{autoplay}
	playsInline
	{loop}
	class="w-full opacity-1 transition-opacity duration-1000"
	class:opacity-100={loaded}
	on:loadeddata={() => (loaded = true)}
>
	{#each sources as src}
		<source src={src?.url} type={src?.type && `video/${src?.type}`} />
	{/each}
</video>
