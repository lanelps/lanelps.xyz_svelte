<script lang="ts">
	import { fly } from 'svelte/transition';
	import ProjectItem from '~components/ProjectItem.svelte';
	import Grid from '~components/Grid.svelte';

	export let data: WorkPageData;

	$: ({ projects } = data);
</script>

<Grid>
	<ul class="flex flex-col col-span-3 -mt-3">
		{#each projects as project, projectIndex (project?._id)}
			<li
				in:fly={{ y: -50, duration: 600, delay: 300 + 25 * projectIndex }}
				class="border-b hover:border-blue"
			>
				<ProjectItem
					name={project?.projectName}
					url={project?.slug?.current}
					date={new Date(project?.projectDate).getFullYear()}
					index={projectIndex < 10 ? `0${projectIndex}` : `${projectIndex}`}
				/>
			</li>
		{/each}
	</ul>
</Grid>
