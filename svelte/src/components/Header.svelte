<script lang="ts">
	const links = [
		{ id: 1, url: `/`, name: `Home` },
		{ id: 2, url: `/about`, name: `About` },
		{ id: 3, url: `/work`, name: `Work` },
		{ id: 4, url: `/contact`, name: `Contact` }
	];

	let menuActive = false;
	let mobileRef: HTMLElement;

	const closeMenu = () => {
		menuActive = false;
	};
</script>

<header class="absolute top-0 w-full px-3 bg-white md-t:bg-transparent z-50">
	<nav class="hidden md-t:block">
		<ul class="w-full flex gap-x-10 border-b py-3 backdrop-blur">
			{#each links as link (link.id)}
				<li class="font-main text-main">
					<a href={link?.url} on:click={closeMenu}>{link?.name}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<nav class="block md-t:hidden">
		<div class="border-b">
			<div>
				<button
					class="py-3 font-main text-main"
					class:active={menuActive}
					on:click={() => (menuActive = !menuActive)}
				>
					{#if menuActive}
						Close
					{:else}
						Menu
					{/if}
				</button>
			</div>

			<nav
				class="transition-[height] duration-300 overflow-hidden"
				style="height: {menuActive ? mobileRef?.clientHeight : 0}px"
			>
				<ul bind:this={mobileRef} class="w-full flex flex-col gap-y-3 pb-3">
					{#each links as link (link.id)}
						<li class="font-main text-main">
							<a href={link?.url} on:click={closeMenu}>{link?.name}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</nav>
</header>

<style>
</style>
