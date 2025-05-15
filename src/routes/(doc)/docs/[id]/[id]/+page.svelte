<script lang="ts">
	import { extractTopLevelTagsWithSlugIds } from '$lib/fxns';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	const tags = extractTopLevelTagsWithSlugIds(data.doc.content);
</script>

<div class="prose dark:prose-invert">
	{#each tags as tag, i}
		{@html tag}
	{/each}
</div>
