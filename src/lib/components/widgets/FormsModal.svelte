<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { formsModalStore } from '$lib/stores';
	import { PencilIcon, PlusIcon } from 'lucide-svelte';
	import JobForm from '../forms/JobForm.svelte';

</script>

<Dialog.Root open={$formsModalStore.open}>
	<Dialog.Content
		class="flex flex-col gap-0 p-0 max-h-[calc(80vh-32px)] sm:max-h-[min(640px,80vh)] sm:max-w-2xl [&>button:last-child]:top-3.5"
	>
		<Dialog.Header class="contents space-y-0 text-left">
			<Dialog.Title class="border-b border-border px-6 py-4 text-base capitalize flex items-center gap-2">
				{#if $formsModalStore.action === 'create'}
					<PlusIcon class="size-4" />
				{/if}
				{#if $formsModalStore.action === 'edit'}
					<PencilIcon class="size-4" />
				{/if}
				{$formsModalStore.title}
			</Dialog.Title>
			<div class="overflow-y-auto">
				<Dialog.Description class="px-6 py-4">
					{#if $formsModalStore.type === 'job'}
						<JobForm job={$formsModalStore.data} />
					{/if}
				</Dialog.Description>
			</div>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
