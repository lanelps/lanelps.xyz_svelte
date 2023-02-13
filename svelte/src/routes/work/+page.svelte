<script lang="ts">
	import ProjectItem from '~components/ProjectItem.svelte';

	export let data: WorkPageData;

	$: ({ projects } = data);
</script>

<section class="grid grid-cols-3 gap-x-4">
	<ul class="flex flex-col col-span-3 -mt-3">
		{#each projects as project, projectIndex}
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
</section>
