<script lang="ts">
	import { page } from '$app/state';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import {
		convertHtmlToSections,
		extractDocumentations,
		extractHeadings
	} from '$lib/components/ui/documentation';
	import Documentation from '$lib/components/ui/documentation/documentation.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import type { iDoc } from '$lib/interface';
	import type { iResult } from '@toolsntuts/utils';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();

	const processDocs = (result: iResult) => {
		const docs = result.data as iDoc[]
		const doc = docs.filter(doc => doc.slug === page.params.id)[0]
		if (!doc) {
			throw new Error("page not found")
		}
		const sections = convertHtmlToSections(doc.content)
		const headings = extractHeadings(sections)
		const documentations = extractDocumentations(docs)

		return { documentations, sections, headings }
	}
</script>

{#await data.getDocs}
	<div>
		<Skeleton class="h-24 w-full" />
	</div>
{:then result}
	{@const { documentations, sections, headings } = processDocs(result)}
	<Documentation {documentations} {sections} {headings} />
{:catch error}
	<AlertWidget
		variant="destructive"
		message={error.message}
		title="Error loading partners"
		href={page.url.pathname}
		linkText="Reload"
	/>
{/await}
