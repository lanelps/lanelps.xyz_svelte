<script lang="ts">
	import type { PortableTextBlock } from '@portabletext/types';

	import { PortableText } from '@portabletext/svelte';
	import Normal from '~components/blocks/Normal.svelte';
	import Link from '~components/blocks/Link.svelte';

	export let value: PortableTextBlock[];
</script>

<PortableText
	{value}
	onMissingComponent={false}
	components={{
		block: {
			normal: Normal
		},
		marks: {
			link: Link
		}
	}}
/>
