<script lang="ts">
	import RichText from '~components/RichText.svelte';

	export let data: ContactPageData;
</script>

<section class="grid grid-cols-3 gap-x-4">
	<div class="sticky top-0 h-max flex flex-col gap-y-6">
		<RichText value={data?.body} />
	</div>
</section>

<style lang="postcss">
</style>
