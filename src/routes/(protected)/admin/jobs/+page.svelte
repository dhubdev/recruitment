<script lang="ts">
	import Heading from '$lib/components/sections/Heading.svelte';
	import type { PageServerData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import DataTable from '$lib/components/ui/data-table/data-table.svelte';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import { page } from '$app/state';
	import type { iJob } from '$lib/interface';
	import { modalStore } from '$lib/stores';
	import { getColumns } from './column';

	let { data }: { data: PageServerData } = $props();

	const columns = getColumns(modalStore);
	
</script>

<div class="flex h-full w-full flex-col gap-4 p-4">
	<Heading title="Job Listings" description="Update your profile to add referees" />
	<Separator />

	{#await data.getJobs}
		<DataTable {columns} data={[]} />
	{:then result}
		{@const jobs = result.data as iJob[]}
		<DataTable {columns} data={jobs} />
	{:catch error}
		<AlertWidget
			variant="destructive"
			message={error.message}
			title="Error loading jobs"
			href={page.url.pathname}
			linkText="Reload"
		/>
	{/await}
</div>
