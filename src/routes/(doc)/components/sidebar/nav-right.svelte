<script lang="ts">
	import { TextIcon } from 'lucide-svelte';
	import { htmlSectionStore } from '$lib/stores';
	import { slugify, stripHtmlTags } from '$lib/fxns';
	import { cn } from '$lib/utils';

	let activeHeading = $state('')

	// Function to handle smooth scrolling with 64px offset
	function scrollToHeading(e: MouseEvent, id: string) {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			const offset = 64;
			const y = el.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: y, behavior: 'smooth' });
			activeHeading = id
		}
	}

	const isActive = (id: string) => id === activeHeading

</script>

<div
	data-toc=""
	class="sticky top-0 flex h-dvh w-[220px] shrink-0 flex-col gap-4 pt-4 max-lg:hidden xl:w-[260px]"
>
	<h3 class="-mb-1 -ms-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
		<TextIcon class="size-4" />
		<span>On this page</span>
	</h3>

	<div
		dir="ltr"
		class="flex flex-col overflow-hidden"
		style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px"
	>
		<div
			data-radix-scroll-area-viewport=""
			class="relative size-full min-h-0 rounded-[inherit] text-sm"
			style="overflow: hidden scroll;"
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
							class={cn("py-1 ps-4 transition-colors", isActive(section.id) && "text-primary" )}
						>
							{stripHtmlTags(section.title)}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
