<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { iDocument } from '$lib/interface';
	import { Button, buttonVariants } from '../ui/button';
	import { docModalStore } from '$lib/stores';

	const { title, content: docContent } = $docModalStore.data as iDocument;

	let content = $state<HTMLDivElement | null>();
	let hasReadToBottom = $state(false);

	function handleScroll() {
		const scrollPercentage = content!.scrollTop / (content!.scrollHeight - content!.clientHeight);
		if (scrollPercentage >= 0.99 && !hasReadToBottom) {
			hasReadToBottom = true;
		}
	}
</script>

<Dialog.Root open={$docModalStore.open}>
	<Dialog.Content
		class="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5"
	>
		<Dialog.Header class="contents space-y-0 text-left">
			<Dialog.Title class="border-b border-border px-6 py-4 text-base">
				{title}
			</Dialog.Title>
			<div
				bind:this={content}
				onscroll={handleScroll}
				class="h-[70vh] overflow-y-auto p-2 md:h-fit portrait:h-[70vh] landscape:h-[50vh] md:landscape:max-h-[70vh]"
			>
				<Dialog.Description class="prose px-6 py-4 dark:prose-invert">
					{@html docContent}
				</Dialog.Description>
			</div>
		</Dialog.Header>
		<Dialog.Footer class="border-t border-border px-6 py-4 sm:items-center">
			{#if !hasReadToBottom}
				<span class="grow text-xs text-muted-foreground max-sm:text-center">
					Read all terms before accepting.
				</span>
			{/if}
			<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Close</Dialog.Close>
			<!-- <Dialog.Close>
				{#snippet child({ props })}
					<Button {...props} disabled={!hasReadToBottom}>I agree</Button>
				{/snippet}
			</Dialog.Close> -->
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
