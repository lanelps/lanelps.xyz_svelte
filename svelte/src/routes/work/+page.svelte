<script lang="ts">
	import { fly, slide, fade } from 'svelte/transition';

	import ProjectItem from '~components/ProjectItem.svelte';
	import Grid from '~components/Grid.svelte';

	export let data: WorkPageData;

	// let tags = data.tags.map((tag) => tag.name).sort();

	let activeFilter = ``;

	$: filteredProjects = data.projects.filter((project) => {
		if (!activeFilter) return project;

		return project.tags.map((t) => t.name).includes(activeFilter);
	});

	// const setFilter = (name: string) => {
	// 	if (activeFilter === name) {
	// 		return (activeFilter = ``);
	// 	}

	// 	activeFilter = name;
	// };

	// const hide = (node, { duration, delay }: { duration: number; delay?: number }) => {
	// 	return {
	// 		duration: !delay ? duration : duration + delay,
	// 		css: () => `opacity: 0`
	// 	};
	// };
</script>

<svelte:head>
	<title>{data?.seo?.title} | Lane Wirihana Le Prevost-Smith</title>
	<meta name="description" content={data?.seo?.description} />
</svelte:head>

<Grid>
	<ul class="flex flex-col col-span-3 -mt-3">
		<!-- <li class="relative w-full flex gap-x-2.5 py-3 font-main text-main border-b z-10">
			{#each tags as tag}
				<button
					class="px-2.5 py-1 border rounded-full hover:skew-x-0"
					class:text-blue={activeFilter === tag}
					on:click={() => setFilter(tag)}>{tag}</button
				>
			{/each}
		</li> -->

		<div class="realtive w-full flex flex-col">
			{#each filteredProjects as project, projectIndex (project?._id)}
				<li
					class="border-b hover:border-blue"
					in:slide={{ duration: 300, delay: 300 + 25 * projectIndex }}
					out:slide={{ duration: 300, delay: 300 }}
				>
					<div>
						<ProjectItem
							name={project?.projectName}
							url={project?.slug?.current}
							date={new Date(project?.projectDate).getFullYear()}
							index={projectIndex < 10 ? `0${projectIndex}` : `${projectIndex}`}
						/>
					</div>
				</li>
			{/each}
		</div>
	</ul>
</Grid>
