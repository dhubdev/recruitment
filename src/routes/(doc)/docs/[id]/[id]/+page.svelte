<script lang="ts">
	import { extractTopLevelTagsWithSlugIds, slugify } from '$lib/fxns';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	const tags = extractTopLevelTagsWithSlugIds(data.doc.content);
</script>

<div class="prose dark:prose-invert">
	<h2 id={slugify(data.doc.title)}>{data.doc.title}</h2>
	{#each tags as tag, i}
		{@html tag}
	{/each}
</div>
