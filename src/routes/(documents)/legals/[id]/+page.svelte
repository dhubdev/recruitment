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
		title: `${(data.result.data as iDocument).title} | Jordan Recruitments`
	};
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{$metaStore.title}</title>
	<meta name="title" content={$metaStore.title} />
	<meta name="description" content={$metaStore.description} />
	<meta name="keywords" content={$metaStore.keywords.join(', ')} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$metaStore.link} />
	<meta property="og:title" content={$metaStore.title} />
	<meta property="og:description" content={$metaStore.description} />
	<meta property="og:image" content={$metaStore.ogimage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={$metaStore.link} />
	<meta property="twitter:title" content={$metaStore.title} />
	<meta property="twitter:description" content={$metaStore.description} />
	<meta property="twitter:image" content={$metaStore.ogimage} />
</svelte:head>
{#if data.result.status === 'error'}
	<div class="flex h-screen w-full items-center justify-center">
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
