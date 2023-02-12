<script lang="ts">
	import { getImageProps } from '~utils/sanity';

	export let image: Image;
</script>

<img
	class="w-full"
	alt={image?.altText || ''}
	{...getImageProps({
		image,
		maxWidth: 1200
	})}
/>
