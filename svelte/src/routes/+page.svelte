<script lang="ts">
	import RichText from '~components/RichText.svelte';
	import Media from '~components/Media.svelte';

	//

	export let data: HomePageData;
</script>

<section class="grid grid-cols-3 gap-4">
	<div
		class="relative md-t:sticky md-t:overflow-y-scroll md-t:top-0 md-t:h-max col-span-full md-t:col-span-1 flex flex-col gap-y-6"
	>
		<RichText value={data?.body} />
	</div>

	<Media media={data?.media} class="w-full col-span-full md-t:col-span-2" loading="eager" />
</section>
