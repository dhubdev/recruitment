<script lang="ts">
	import Heading from '$lib/components/sections/Heading.svelte';
	import type { PageServerData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import DataTable from '$lib/components/ui/data-table/data-table.svelte';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import { page } from '$app/state';
	import type { iFile, iJob } from '$lib/interface';
	import { modalStore } from '$lib/stores';
	import { getColumns } from './column';
	import { Button } from '$lib/components/ui/button';
	import { PlusIcon } from 'lucide-svelte';
	import { toDatetimeLocal } from '$lib/fxns';

	let { data }: { data: PageServerData } = $props();

	const columns = getColumns(modalStore);
	const addJob = () => {
		$modalStore = {
			...$modalStore,
			open: true,
			title: 'Add Job',
			description: 'Fill the form below to add a new job',
			type: 'job'
		};
	};

	const flatten = (job: iJob) => ({
		id: job.xata_id,
		title: job.title,
		location: job.location,
		nature: job.nature,
		closingDate: job.closingDate ? job.closingDate : '',
		createdAt: job.xata_createdat.toLocaleString(),
		updatedAt: job.xata_updatedat.toLocaleString(),
		file: job.file ? (job.file as iFile)?.url : ''
	})
</script>

<div class="flex h-full w-full flex-col gap-4 p-4">
	<Heading title="Job Listings" description="Add and manage job listings" />
	<Separator />
	<div class="flex items-center justify-center gap-2 md:justify-start">
		<Button onclick={addJob}>
			<PlusIcon class="size-4" />
			<span>Add Job</span>
		</Button>
	</div>
	{#await data.getJobs}
		<DataTable {flatten}  {columns} data={[]} />
	{:then result}
		{@const jobs = result.data as iJob[]}
		<DataTable {flatten} {columns} data={jobs} />
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
