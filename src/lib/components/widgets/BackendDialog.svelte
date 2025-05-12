<script lang="ts">
	import { modalStore } from '$lib/stores';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { iDoc, iJob } from '$lib/interface';
	import JobForm from '../forms/JobForm.svelte';
	import DeleteJobForm from '../forms/delete/DeleteJobForm.svelte';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import DocForm from '../forms/DocForm.svelte';
	import DeleteDocForm from '../forms/delete/DeleteDocForm.svelte';
</script>

<Dialog.Root open={$modalStore.open}>
	<Dialog.Content class="mx-auto w-[calc(100%-32px)] max-w-4xl rounded-lg p-2">
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
			<ScrollArea class="h-[70vh] portrait:h-[70vh] landscape:h-[50vh] md:landscape:h-[70vh] p-2">
				<JobForm job={$modalStore.data as iJob} />
			</ScrollArea>
		{/if}

		{#if $modalStore.type === 'deleteJob'}
			<DeleteJobForm job={$modalStore.data as iJob} />
		{/if}

		{#if $modalStore.type === 'doc'}
			<ScrollArea class="h-[70vh] portrait:h-[70vh] landscape:h-[50vh] md:landscape:h-[70vh] p-2">
				<DocForm doc={$modalStore.data as iDoc} />
			</ScrollArea>
		{/if}
		
		{#if $modalStore.type === 'deleteJob'}
			<DeleteDocForm doc={$modalStore.data as iDoc} />
		{/if}
	</Dialog.Content>
</Dialog.Root>
