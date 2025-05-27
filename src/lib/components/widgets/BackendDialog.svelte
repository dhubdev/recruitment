<script lang="ts">
	import { modalStore } from '$lib/stores';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { iDocument, iDocumentCategory, iJob } from '$lib/interface';
	import JobForm from '../forms/JobForm.svelte';
	import ViewJobForm from '../forms/view/ViewJobForm.svelte';
	import DeleteJobForm from '../forms/delete/DeleteJobForm.svelte';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import DocForm from '../forms/DocForm.svelte';
	import DeleteDocForm from '../forms/delete/DeleteDocForm.svelte';
	import DocCategoryForm from '../forms/DocCategoryForm.svelte';
	import DeleteDocCategoryForm from '../forms/delete/DeleteDocCategoryForm.svelte';
	import { cn } from '$lib/utils';

	interface Props {
		documentCategories?: iDocumentCategory[];
	}

	let { documentCategories }: Props = $props();
</script>

<Dialog.Root open={$modalStore.open}>
	<Dialog.Content
		class={cn('mx-auto w-[calc(100%-32px)] max-w-4xl rounded-lg p-2', $modalStore.className)}
	>
		<Dialog.Header class="contents gap-0 space-y-0 text-left">
			<Dialog.Title class="p-1 text-base">
				<h2>{$modalStore.title}</h2>
				<span class="text-sm font-[400] text-muted-foreground">{$modalStore.description}</span>
			</Dialog.Title>
		</Dialog.Header>
		<Dialog.Description class="sr-only">
			{$modalStore.description}
		</Dialog.Description>
		{#if $modalStore.type === 'job'}
			<ScrollArea
				class="h-[70vh] p-2 md:h-fit portrait:h-[70vh] landscape:h-[50vh] md:landscape:max-h-[70vh]"
			>
				<JobForm job={$modalStore.data as iJob} />
			</ScrollArea>
		{/if}
		{#if $modalStore.type === 'viewJob'}
			<ScrollArea
				class="h-[70vh] p-2 md:h-fit portrait:h-[70vh] landscape:h-[50vh] md:landscape:max-h-[70vh]"
			>
				<ViewJobForm job={$modalStore.data as iJob} />
			</ScrollArea>
		{/if}

		{#if $modalStore.type === 'deleteJob'}
			<DeleteJobForm jobs={$modalStore.data as Array<iJob>} />
		{/if}

		{#if $modalStore.type === 'doc'}
			<ScrollArea
				class="h-[70vh] p-2 md:h-fit portrait:h-[70vh] landscape:h-[50vh] md:landscape:max-h-[70vh]"
			>
				<DocForm
					documentCategories={documentCategories ?? []}
					doc={$modalStore.data as iDocument}
				/>
			</ScrollArea>
		{/if}

		{#if $modalStore.type === 'deleteDoc'}
			<DeleteDocForm docs={$modalStore.data as iDocument[]} />
		{/if}

		{#if $modalStore.type === 'docCategory'}
			<ScrollArea
				class="h-[70vh] p-2 md:h-fit portrait:h-[70vh] landscape:h-[50vh] md:landscape:max-h-[70vh]"
			>
				<DocCategoryForm documentCategory={$modalStore.data as iDocumentCategory} />
			</ScrollArea>
		{/if}
		{#if $modalStore.type === 'deleteDocCategory'}
			<DeleteDocCategoryForm documentCategories={$modalStore.data as Array<iDocumentCategory>} />
		{/if}
	</Dialog.Content>
</Dialog.Root>
