<script lang="ts">
	import Heading from '$lib/components/sections/Heading.svelte';
	import type { PageServerData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import DataTable from '$lib/components/ui/data-table/data-table.svelte';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import { page } from '$app/state';
	import type { iDocumentCategory } from '$lib/interface';
	import { docCategoryStore, modalStore } from '$lib/stores';
	import { getColumns } from './column';
	import { Button } from '$lib/components/ui/button';
	import { PlusIcon } from 'lucide-svelte';
	import type { iResult } from '@toolsntuts/utils';

	let { data }: { data: PageServerData } = $props();

	const columns = getColumns(modalStore);
	const addDocCategory = () => {
		$modalStore = {
			...$modalStore,
			open: true,
			title: 'Add Document Category',
			description: 'Fill the form below to add a new category',
			type: 'docCategory'
		};
	};

	const flatten = (docCategory: iDocumentCategory) => docCategory;

	const getDocs = (result: iResult) => {
		$docCategoryStore = result.data as iDocumentCategory[];
		return result.data as iDocumentCategory[];
	};

	const bulkDelete = (selected: any[]) => {
		$modalStore = {
			...$modalStore,
			open: true,
			title: 'Delete Document Categories',
			description: 'Are you sure you want to delete these categories?',
			type: 'deleteDocCategory',
			data: selected,
			className: 'max-w-md'
		};
	};
</script>

<div class="flex h-full w-full flex-col gap-4 p-4">
	<Heading title="Documents" description="Add and manage documents" />
	<Separator />
	<div class="flex items-center justify-center gap-2 md:justify-start">
		<Button onclick={addDocCategory}>
			<PlusIcon class="size-4" />
			<span>Add Document Category</span>
		</Button>
	</div>
	{#await data.getDocs}
		<DataTable {flatten} {columns} data={[]} />
	{:then result}
		{@const docs = getDocs(result)}
		<DataTable {bulkDelete} {flatten} {columns} data={docs} />
	{:catch error}
		<AlertWidget
			variant="destructive"
			message={error.message}
			title="Error loading document categories"
			href={page.url.pathname}
			linkText="Reload"
		/>
	{/await}
</div>
