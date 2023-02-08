<script lang="ts">
	const links = [
		{ id: 1, url: `/`, name: `Home` },
		{ id: 2, url: `/about`, name: `About` },
		{ id: 3, url: `/work`, name: `Work` },
		{ id: 4, url: `/contact`, name: `Contact` }
	];
</script>

<header class="absolute top-0 w-full px-3 z-50">
	<nav>
		<ul class="w-full flex gap-x-10 border-b py-3">
			{#each links as link (link.id)}
				<li class="font-main text-main">
					<a href={link?.url}>{link?.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
</style>
