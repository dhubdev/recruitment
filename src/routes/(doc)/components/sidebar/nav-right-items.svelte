<script lang="ts">
	import { stripHtmlTags } from '$lib/fxns';
	import { cn } from '$lib/utils';
	import { currentSectionStore, htmlSectionStore } from '../../lib/stores';
  import { isOpen } from './nav-top.svelte';

	let activeHeading = $state('');

	// Function to handle smooth scrolling with 64px offset
	function scrollToHeading(e: MouseEvent, id: string) {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			const offset = 104;
			const y = el.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: y, behavior: 'smooth' });
			activeHeading = id;
			$currentSectionStore = el;
      $isOpen = false
		}
	}

	const isActive = (id: string) => id === activeHeading || id === $currentSectionStore?.id;
</script>

<div
	dir="ltr"
	class="flex flex-col overflow-hidden"
>
	<div
		data-radix-scroll-area-viewport=""
		class="relative size-full min-h-0 rounded-[inherit] text-sm"
	>
		<div style="min-width:100%;display:table">
			<div
				role="none"
				class="absolute start-0 hidden w-0.5 bg-primary transition-all"
				style="top: 0px; height: 28px; display: block;"
			></div>

			<div class="flex flex-col gap-1 border-s-2 text-muted-foreground">
				{#each $htmlSectionStore as section, i}
					<a
						href={`#${section.id}`}
						onclick={(e) => scrollToHeading(e, section.id)}
						class={cn('py-1 ps-4 transition-colors', isActive(section.id) && 'text-primary')}
					>
						{stripHtmlTags(section.title)}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
