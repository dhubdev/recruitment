<script lang="ts">
	import { extractHeadingTagsOnly, extractTopLevelTagsWithSlugIds, slugify } from '$lib/fxns';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import { headingStore } from '$lib/stores';

	let { data }: { data: PageServerData } = $props();

	let tags = $state<string[]>([]);

	onMount(() => {
		tags = extractTopLevelTagsWithSlugIds(data.doc.content);
		$headingStore = extractHeadingTagsOnly(tags)
	});
</script>

<div class="prose dark:prose-invert">
	<h1 id={slugify(data.doc.title)}>{data.doc.title}</h1>
	{#each tags as tag, i}
		{@html tag}
	{/each}
</div>
