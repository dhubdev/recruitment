<script lang="ts">
	import { generateSectionsFromHtmlString } from '$lib/fxns';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import { htmlSectionStore } from '$lib/stores';

	let { data }: { data: PageServerData } = $props();

	onMount(() => {
		$htmlSectionStore = generateSectionsFromHtmlString(data.doc.content);
	});
</script>

<div class="prose dark:prose-invert">
	<h1>{data.doc.title}</h1>
	{#each $htmlSectionStore as section, i}
		{@html section.content}
	{/each}
</div>
