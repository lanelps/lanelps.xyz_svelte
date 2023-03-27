<script lang="ts">
	export let image: Image;
	export let loading: string = 'lazy';
	let loaded: boolean = false;
</script>

<img
	class="relative w-full h-auto opacity-0 transition-opacity duration-1000"
	class:opacity-100={loaded}
	{loading}
	fetchPriority={loading === 'eager' ? 'high' : undefined}
	alt={image?.altText || ''}
	{...image?.url}
	on:load={() => (loaded = true)}
/>
