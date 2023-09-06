<script lang="ts">
	import Media from '~components/Media.svelte';
	import RichText from '~components/RichText.svelte';
	import Grid from '~components/Grid.svelte';
	import StickyWrapper from '~components/StickyWrapper.svelte';

	export let data: Project;
</script>

<svelte:head>
	<title>{data?.seo?.title} | Lane Wirihana Le Prevost-Smith</title>
	<meta name="description" content={data?.seo?.description} />
</svelte:head>

<Grid>
	<StickyWrapper>
		<div class="flex flex-col gap gap-y-3">
			<h1>
				<span>{data?.projectName}</span> — <time>{new Date(data.projectDate).getFullYear()}</time>
			</h1>

			<a href={data?.website} target="_blank" rel="noopener noreferrer">{data?.website}</a>

			<div class="flex">
				<h3><b>Role:</b></h3>
				&nbsp;
				<p>{data?.role?.join(', ')}</p>
			</div>

			<div class="flex">
				<h3><b>Team:</b></h3>
				&nbsp;
				<p>{data?.team?.join(', ')}</p>
			</div>

			<div class="flex">
				<h3><b>Tech-stack:</b></h3>
				&nbsp;
				<p>{data?.techStack?.join(', ')}</p>
			</div>

			<RichText value={data?.projectDescription} />
		</div>
	</StickyWrapper>

	<ul class="relative w-full col-span-full md-t:col-span-2 flex flex-col gap-y-3">
		{#each data.images as media (media._key)}
			<li class="w-full">
				<Media {media} loading="lazy" />
			</li>
		{/each}
	</ul>
</Grid>
