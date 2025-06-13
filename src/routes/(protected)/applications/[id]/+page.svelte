<script lang="ts">
	import { page } from '$app/state';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const application = data.application;
</script>

{#if !application}
	<AlertWidget
		variant="destructive"
		message="Page Not Found"
		title="Error loading application"
		href={page.url.pathname}
		linkText="Reload"
	/>
{:else}
	<p>{application.name}</p>
{/if}
