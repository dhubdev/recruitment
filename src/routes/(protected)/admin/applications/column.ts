/*
	Installed from github/TnTSpace/registry
*/

import type { ColumnDef } from '@tanstack/table-core';
import { renderComponent } from '$lib/components/ui/data-table';
import DataTableActions, { type iDataTableActions } from '$lib/components/ui/data-table/data-table-actions.svelte';
import DataTableSortButton from '$lib/components/ui/data-table/data-table-sort-button.svelte';
import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
import { CopyIcon, EyeIcon, PencilLineIcon, Trash2Icon } from "lucide-svelte";
import { onCopy } from '@toolsntuts/utils';
import { get, type Writable } from 'svelte/store';
import type { iApplication, iJob, iModal } from '$lib/interface';
import { applicationStore } from '$lib/stores';
import JobSource from '$lib/components/job/job-source.svelte';

export type Payment = {
	id: string;
	amount: number;
	status: 'pending' | 'processing' | 'completed' | 'failed';
	email: string;
};

export const getColumns = (modalStore: Writable<iModal>) => {

	const actions: iDataTableActions[] = [
		{
			name: "Copy ID",
			action: onCopy,
			icon: CopyIcon
		},
		{
			name: "View Row",
			action: (id: string) => {
				const applications = get(applicationStore)
				const application = applications.find(ref => ref.xata_id === id)
				modalStore.update(existing => ({
					...existing,
					open: true,
					data: application,
					title: 'View Application',
					description: `View ${application?.name}'s application`,
					type: 'viewApplication'
				}))
			},
			icon: EyeIcon
		},
		{
			name: "Edit Row",
			className: "text-blue-500",
			action: (id: string) => {
				const applications = get(applicationStore)
				const application = applications.find(ref => ref.xata_id === id)
				modalStore.update(existing => ({
					...existing,
					open: true,
					data: application,
					title: 'Update Application',
					description: 'Fill the form below to update job application',
					type: 'application'
				}))
			},
			icon: PencilLineIcon
		},
		{
			name: "Delete Row",
			className: "text-red-500",
			action: async (id: string) => {
				const applications = get(applicationStore)
				const application = applications.find(ref => ref.xata_id === id)
				modalStore.update(existing => ({
					...existing,
					open: true,
					data: [application],
					title: 'Delete Row',
					description: `This action cannot be undone. This will permanently delete ${application?.name}'s application and remove it's data from our servers.`,
					type: 'deleteApplication',
					className: 'max-w-md'
				}))
			},
			icon: Trash2Icon
		}
	]

	const columns: ColumnDef<iApplication>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				renderComponent(Checkbox, {
					checked: table.getIsAllPageRowsSelected(),
					indeterminate: table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected(),
					onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all'
				}),
			cell: ({ row }) =>
				renderComponent(Checkbox, {
					checked: row.getIsSelected(),
					onCheckedChange: (value) => row.toggleSelected(!!value),
					'aria-label': 'Select row'
				}),
			enableSorting: false,
			enableHiding: false
		},
		{
			accessorKey: 'source',
			header: 'Source',
			cell: ({ row }) => {
				return renderComponent(JobSource, { job: (row.original.job as iJob) });
			}
		},
		{
			accessorKey: 'title',
			header: ({ column }) =>
				renderComponent(DataTableSortButton, {
					onclick: column.getToggleSortingHandler(),
					title: 'Title'
				}),
		},
		{
			accessorKey: 'location',
			header: ({ column }) =>
				renderComponent(DataTableSortButton, {
					onclick: column.getToggleSortingHandler(),
					title: 'Location'
				}),
		},
		{
			accessorKey: 'nature',
			header: 'Nature'
		},
		{
			id: 'actions',
			header: 'Actions',
			cell: ({ row }) => {
				return renderComponent(DataTableActions, { id: row.original.xata_id, actions, row: row.original });
			}
		}
	];

	return columns
}

