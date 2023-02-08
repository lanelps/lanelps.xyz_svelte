<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	export let data: AboutPageData;
</script>

<div class="rich-text">
	<PortableText value={[...data?.body]} onMissingComponent={false} />
</div>

<style lang="postcss">
</style>
