<script lang="ts">
	import Heading from '$lib/components/sections/Heading.svelte';
	import type { PageServerData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import DataTable from '$lib/components/ui/data-table/data-table.svelte';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import { page } from '$app/state';
	import type { iFile, iDoc } from '$lib/interface';
	import { docStore, modalStore } from '$lib/stores';
	import { getColumns } from './column';
	import { Button } from '$lib/components/ui/button';
	import { PlusIcon } from 'lucide-svelte';
	import type { iResult } from '@toolsntuts/utils';

	let { data }: { data: PageServerData } = $props();

	const columns = getColumns(modalStore);
	const addDoc = () => {
		$modalStore = {
			...$modalStore,
			open: true,
			title: 'Add Document',
			description: 'Fill the form below to add a new document',
			type: 'doc'
		};
	};

	const flatten = (doc: iDoc) => ({
		id: doc.xata_id,
		title: doc.title,
		createdAt: doc.xata_createdat.toLocaleString(),
		updatedAt: doc.xata_updatedat.toLocaleString(),
		file: doc.file ? (doc.file as iFile)?.url : ''
	});

	const getDocs = (result: iResult) => {
		$docStore = result.data as iDoc[]
		return result.data as iDoc[]
	};

	const bulkDelete = (selected: any[]) => {
		$modalStore = {
			...$modalStore,
			open: true,
			title: 'Delete Documents',
			description: 'Are you sure you want to delete these documents?',
			type: 'deleteDoc',
			data: selected
		};
	}
</script>

<div class="flex h-full w-full flex-col gap-4 p-4">
	<Heading title="Documents" description="Add and manage documents" />
	<Separator />
	<div class="flex items-center justify-center gap-2 md:justify-start">
		<Button onclick={addDoc}>
			<PlusIcon class="size-4" />
			<span>Add Document</span>
		</Button>
	</div>
	{#await data.getDocs}
		<DataTable {flatten} {columns} data={[]} />
	{:then result}
		{@const docs = getDocs(result)}
		<DataTable {flatten} {bulkDelete} {columns} data={docs} />
	{:catch error}
		<AlertWidget
			variant="destructive"
			message={error.message}
			title="Error loading documentss"
			href={page.url.pathname}
			linkText="Reload"
		/>
	{/await}
</div>
