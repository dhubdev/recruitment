<script lang="ts">
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import DataTable from '$lib/components/ui/data-table/data-table.svelte';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import { jobStore, modalStore } from '$lib/stores';
	import type { iResult } from '@toolsntuts/utils';
	import { getColumns } from '../column';
	import type { PageData } from './$types';
	import type { iJob } from '$lib/interface';
	import { flatten } from '$lib/components/job';
	import { page } from '$app/state';

	let { data }: { data: PageData } = $props();
	
	const columns = getColumns(modalStore);
	const getJobs = (result: iResult) => {
		$jobStore = result.data as iJob[];
		return result.data as iJob[];
	};

	const ondelete = () => {}
</script>
<Wrap>
	{#await data.getJobs}
		<DataTable {flatten} {columns} data={[]} />
	{:then result}
		{@const jobs = getJobs(result)}
		<DataTable {ondelete} {flatten} {columns} data={jobs} />
	{:catch error}
		<AlertWidget
			variant="destructive"
			message={error.message}
			title="Error loading jobs"
			href={page.url.pathname}
			linkText="Reload"
		/>
	{/await}
</Wrap>
