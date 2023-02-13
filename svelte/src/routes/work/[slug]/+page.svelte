<script lang="ts">
	import Image from '~components/Image.svelte';
	import RichText from '~components/RichText.svelte';

	export let data: Project;
</script>

<section class="grid grid-cols-3 gap-x-4">
	<div class="col-span-1 sticky top-0 h-max flex flex-col gap-y-3 font-main text-main">
		<h1>
			<span>{data?.projectName}</span> — <time>{new Date(data.projectDate).getFullYear()}</time>
		</h1>

		<a href={data?.website} target="_blank" rel="noopener noreferrer">{data?.website}</a>

		<div class="flex">
			<h3><b>Role:</b></h3>
			&nbsp;
			<p>{data?.role}</p>
		</div>

		<div class="flex">
			<h3><b>Team:</b></h3>
			&nbsp;
			<p>{data?.team}</p>
		</div>

		<RichText value={data?.projectDescription} />
	</div>

	<ul class="col-span-2 flex flex-col gap-y-3">
		{#each data.images as image (image._key)}
			<li>
				<Image {image} />
			</li>
		{/each}
	</ul>
</section>
