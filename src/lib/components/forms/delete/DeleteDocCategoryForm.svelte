<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import SpinLoader from '$lib/components/ui/spin-loader/spin-loader.svelte';
	import type { iDocumentCategory } from '$lib/interface';
	import { modalStore } from '$lib/stores';
	import { cn } from '$lib/utils';
	import type { iResult } from '@toolsntuts/utils';
	import { toast } from 'svelte-sonner';

	interface Props {
		documentCategories: Array<iDocumentCategory>;
		class?: string;
	}

	let loading = $state(false);

	let { documentCategories, class: className }: Props = $props();

	const promise = async (documentCategory: iDocumentCategory) => {
		const url = `/api/documentcategories/${documentCategory.xata_id}`;
		const options: RequestInit = {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(documentCategory)
		};
		const response = await fetch(url, options);
		const result = (await response.json()) as iResult;
		return result
	};

	let onclick = async () => {
		try {
			loading = true;
			const promises = documentCategories.map(promise);
			const results = await Promise.all(promises);

			results.forEach((result) => {
				if (result.status === 'error') {
					throw new Error(result.message);
				}
				return result;
			});
			toast.success('Successfully deleted');
			location.reload();
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			loading = false;
		}
	};

	const closeModal = () => {
		$modalStore = { ...$modalStore, open: false };
	};
</script>

<div class={cn('flex flex-col gap-4', className)}>
	<div class="flex items-center justify-end gap-2">
		<Button variant="outline" onclick={closeModal}>Cancel</Button>
		{#if loading}
			<Button variant="destructive">
				<SpinLoader />
			</Button>
		{:else}
			<Button variant="destructive" {onclick}>Continue</Button>
		{/if}
	</div>
</div>
