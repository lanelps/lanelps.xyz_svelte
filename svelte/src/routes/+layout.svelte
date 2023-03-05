<script lang="ts">
	import '../styles/index.css';

	import { fade } from 'svelte/transition';

	import Header from '~components/Header.svelte';

	export let data: any;
</script>

<div
	class="fixed inset-0 w-[calc(100vw-2.5rem)] h-[calc(100vh-1.5rem)] mx-5 my-3 border overflow-hidden"
>
	<Header />
	{#key data?.url}
		<main
			class="h-full px-3 pt-[3.75rem] pb-3 overflow-y-scroll"
			in:fade={{ duration: 250, delay: 300 }}
			out:fade={{ duration: 250 }}
		>
			<slot />
		</main>
	{/key}
</div>
