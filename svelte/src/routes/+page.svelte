<script lang="ts">
	import RichText from '../components/RichText.svelte';

	export let data: HomePageData;
</script>

<section class="grid grid-cols-3 gap-x-4">
	<div class="flex flex-col gap-y-6">
		<RichText value={data?.body} />
	</div>
</section>
