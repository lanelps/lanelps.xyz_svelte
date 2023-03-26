<script lang="ts">
	import RichText from '~components/RichText.svelte';
	import Media from '~components/Media.svelte';
	import Grid from '~components/Grid.svelte';
	import StickyWrapper from '~components/StickyWrapper.svelte';

	//

	export let data: HomePageData;
</script>

<svelte:head>
	<title>{data?.seo?.title}</title>
	<meta name="description" content={data?.seo?.description} />
</svelte:head>

<Grid>
	<StickyWrapper>
		<RichText value={data?.body} />
	</StickyWrapper>

	<Media media={data?.media} class="col-span-full md-t:col-span-2" loading="eager" />
</Grid>
