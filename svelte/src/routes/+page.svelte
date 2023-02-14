<script lang="ts">
	import RichText from '~components/RichText.svelte';
	import Media from '~components/Media.svelte';

	//

	export let data: HomePageData;
</script>

<section class="grid grid-cols-3 gap-x-4">
	<div class="sticky top-0 h-max flex flex-col gap-y-6">
		<RichText value={data?.body} />
	</div>

	<Media media={data?.media} class="col-span-2" loading="eager" />
</section>
