<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';
	import DocumentPage from '$lib/components/ui/document-layout/document-page.svelte';
	import type { iDocument } from '$lib/interface';
	import { metaStore } from '$lib/stores';
	import BinocularsIcon from '$lib/components/icons/binoculars-icon.svelte';
	import { Button } from '$lib/components/ui/button';

	let { data }: { data: PageData } = $props();

	$metaStore = {
		...$metaStore,
		title: `${data} | Jordan Recruitments`
	};
</script>

{#if data.result.status === 'error'}
<div class="flex items-center justify-center h-screen w-full">
	<div class="flex flex-col items-center gap-2">
		<BinocularsIcon />
		<h1 class="text-2xl font-semibold">{page.status}: {page.error?.message}</h1>
		<Button href="/">Go Home 👉</Button>
	</div>
</div>
{:else}
	{@const document = data.result.data as iDocument}
	<DocumentPage {document} />
{/if}
