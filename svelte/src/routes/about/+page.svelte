<script lang="ts">
	import RichText from '../../components/RichText.svelte';

	export let data: AboutPageData;
</script>

<div class="rich-text">
	<RichText value={data?.body} />
</div>

<style lang="postcss">
</style>
