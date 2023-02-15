<script lang="ts">
	import RichText from '~components/RichText.svelte';
	import ContactForm from '~components/ContactForm.svelte';
	import Grid from '~components/Grid.svelte';
	import StickyWrapper from '~components/StickyWrapper.svelte';

	export let data: ContactPageData;
</script>

<Grid>
	<StickyWrapper>
		<RichText value={data?.body} />
	</StickyWrapper>

	<ContactForm class="col-span-full md-t:col-span-2" />
</Grid>
