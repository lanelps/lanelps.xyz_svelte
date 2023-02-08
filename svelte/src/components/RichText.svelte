<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Normal from './blocks/Normal.svelte';
	import Link from './blocks/Link.svelte';

	export let value: [];
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
