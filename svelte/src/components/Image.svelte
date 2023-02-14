<script lang="ts">
	import { getImageProps } from '~utils/sanity';

	export let image: Image;
	export let loading: string = 'lazy';
	let loaded: boolean = false;
</script>

<img
	class="w-full h-auto opacity-0 transition-opacity duration-1000"
	class:opacity-100={loaded}
	{loading}
	fetchPriority={loading === 'eager' ? 'high' : undefined}
	alt={image?.altText || ''}
	{...getImageProps({
		image,
		maxWidth: 1200
	})}
	on:load={() => (loaded = true)}
/>
