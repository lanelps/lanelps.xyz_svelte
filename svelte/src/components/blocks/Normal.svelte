<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps;
</script>

<p class="font-main text-main">
	<slot />
</p>
