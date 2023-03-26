<script lang="ts">
	import RichText from '~components/RichText.svelte';
	import ContactForm from '~components/ContactForm.svelte';
	import Grid from '~components/Grid.svelte';
	import StickyWrapper from '~components/StickyWrapper.svelte';

	export let data: ContactPageData;
</script>

<svelte:head>
	<title>{data?.seo?.title} | Lane Wirihana Le Prevost-Smith</title>
	<meta name="description" content={data?.seo?.description} />
</svelte:head>

<Grid>
	<StickyWrapper>
		<RichText value={data?.body} />
	</StickyWrapper>

	<ContactForm class="col-span-full md-t:col-span-2" />
</Grid>
