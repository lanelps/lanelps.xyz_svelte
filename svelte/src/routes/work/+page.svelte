<script lang="ts">
	import ProjectItem from '~components/ProjectItem.svelte';
	import Grid from '~components/Grid.svelte';

	export let data: WorkPageData;

	$: ({ projects } = data);
</script>

<Grid>
	<ul class="flex flex-col col-span-3 -mt-3">
		{#each projects as project, projectIndex (project?._id)}
			<li class="border-b hover:border-blue transition-colors">
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
