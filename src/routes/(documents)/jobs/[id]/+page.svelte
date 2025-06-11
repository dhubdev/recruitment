<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';
	import DocumentPage from '$lib/components/ui/document-layout/document-page.svelte';
	import type { iDocument, iFile, iJob } from '$lib/interface';
	import { metaStore } from '$lib/stores';
	import BinocularsIcon from '$lib/components/icons/binoculars-icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';

	let { data }: { data: PageData } = $props();

	const contentHtml = (job: iJob) => {
		return `
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-1">
					<img src=${(job.file as iFile).url} class="size-6" alt=${job.source} />
					<span class="text-sm font-medium">${job.source}</span>
				</div>
				<h2 class="prose dark:prose-invert">${job.title}</h2>
				<div class="capitalize">
					Location: ${job.location}
				</div>
				<div class="capitalize">
					Nature: ${job.nature}
				</div>
			</div>

			<div class="prose dark:prose-invert">
				<h2>About the Job</h2>
				${job.content}
			</div>
		</div>
		`;
	};

	const job = data.result.data as iJob;
	let document =$state<iDocument | null>(job ? {
		xata_id: job.xata_id,
		xata_createdat: job.xata_createdat,
		xata_updatedat: job.xata_updatedat,
		xata_version: job.xata_version,
		title: job.title,
		category: {
			xata_id: '',
			xata_createdat: job.xata_createdat,
			xata_updatedat: job.xata_updatedat,
			xata_version: job.xata_version,
			category: 'Jobs',
			file: '',
			content: 'Jobs'
		},
		file: job.file,
		content: contentHtml(job)
	} : null)

	$metaStore = {
		...$metaStore,
		title: `${job ? job.title : 'Not Found'} | Jordan Recruitments`
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
{#if !document}
	<AlertWidget
		variant="destructive"
		message="Page Not Found"
		title="Error loading application"
		href={page.url.pathname}
		linkText="Reload"
	/>
{:else}
	<DocumentPage {document} />
{/if}
