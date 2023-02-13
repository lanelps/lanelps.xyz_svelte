<script lang="ts">
	export let name: string, url: string, date: number, index: string;
</script>

<a href={`/work/${url}`} class="w-full flex justify-between py-3 font-main text-main">
	<div class="flex gap-x-3">
		<span>{index}</span>
		<h3>{name}</h3>
	</div>

	<time>{date}</time>
</a>
