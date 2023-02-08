<script>
	import '../styles/index.css';
	import Header from '../components/Header.svelte';
</script>

<div
	class="fixed inset-0 w-[calc(100vw-2.5rem)] h-[calc(100vh-1.5rem)] mx-5 my-3 border overflow-hidden"
>
	<Header />

	<main class="px-3 pt-[3.75rem]">
		<slot />
	</main>
</div>
