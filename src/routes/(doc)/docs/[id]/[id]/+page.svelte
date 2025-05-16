<script lang="ts">
	import { generateSectionsFromHtmlString } from '$lib/fxns';
	import { onMount, tick } from 'svelte';
	import type { PageServerData } from './$types';
	import { currentSectionStore, htmlSectionStore } from '../../../lib/stores';
	
	let { data }: { data: PageServerData } = $props();

	const observation = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				$currentSectionStore = entry.target
			}
		});
	};

	const options: IntersectionObserverInit = { rootMargin: "-50% 0px" };

onMount(() => {
	let observer: IntersectionObserver;

	const run = async () => {
		$htmlSectionStore = generateSectionsFromHtmlString(data.doc.content);
		await tick(); // Ensure DOM has updated

		observer = new IntersectionObserver(observation, options);

		$htmlSectionStore.forEach((section) => {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		});
	};

	run();

	// Return cleanup function
	return () => {
		if (observer) {
			$htmlSectionStore.forEach((section) => {
				const el = document.getElementById(section.id);
				if (el) observer.unobserve(el);
			});
			observer.disconnect();
		}
	};
});

</script>

<div class="prose dark:prose-invert">
	<h1>{data.doc.title}</h1>
	{#each $htmlSectionStore as section, i}
		{@html section.content}
	{/each}
</div>
