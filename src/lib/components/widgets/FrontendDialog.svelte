<script lang="ts">
	import { modalStore } from '$lib/stores';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { iJob } from '$lib/interface';
	import ViewJobForm from '../forms/view/ViewJobForm.svelte';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';
	import { cn } from '$lib/utils';
</script>

<Dialog.Root open={$modalStore.open}>
	<Dialog.Content
		class={cn('mx-auto w-[calc(100%-32px)] max-w-4xl rounded-lg p-2', $modalStore.className)}>
		<Dialog.Header class="contents gap-0 space-y-0 text-left">
			<Dialog.Title class="p-1 text-base">
				<h2>{$modalStore.title}</h2>
				<span class="text-sm font-[400] text-muted-foreground">{$modalStore.description}</span>
			</Dialog.Title>
		</Dialog.Header>
		<Dialog.Description class="sr-only">
			{$modalStore.description}
		</Dialog.Description>

		{#if $modalStore.type === 'applyForJob'}
			<ScrollArea
				class="h-[70vh] p-2 md:h-fit portrait:h-[70vh] landscape:h-[50vh] md:landscape:max-h-[70vh]"
			>
				<ViewJobForm job={$modalStore.data as iJob} />
			</ScrollArea>
		{/if}
	</Dialog.Content>
</Dialog.Root>
