<script lang="ts">
	import { modalStore } from '$lib/stores';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { iJob } from '$lib/interface';
	import JobForm from '../forms/JobForm.svelte';
	import DeleteJobForm from '../forms/delete/DeleteJobForm.svelte';
</script>

<Dialog.Root open={$modalStore.open}>
	<Dialog.Content class="mx-auto w-[calc(100%-32px)] max-w-4xl p-4 rounded-lg">
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
			<JobForm job={$modalStore.data as iJob} />
		{/if}

		{#if $modalStore.type === 'deleteJob'}
			<DeleteJobForm job={$modalStore.data as iJob} />
		{/if}
	</Dialog.Content>
</Dialog.Root>
