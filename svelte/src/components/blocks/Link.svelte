<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps<{
		href?: string;
	}>;

	$: ({
		value: { href }
	} = portableText);
</script>

<a {href} target="_blank" rel="noreferrer noopener" class="font-main text-main underline">
	<slot />
</a>
