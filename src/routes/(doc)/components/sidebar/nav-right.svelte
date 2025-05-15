<script lang="ts">
	import { TextIcon } from 'lucide-svelte';
	import { headingStore } from '$lib/stores';
	import { slugify, stripHtmlTags } from '$lib/fxns';

	// Function to handle smooth scrolling with 64px offset
	function scrollToHeading(e: MouseEvent, id: string) {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) {
			const offset = 64;
			const y = el.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	}
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
		<style>
			[data-radix-scroll-area-viewport] {
				scrollbar-width: none;
				-ms-overflow-style: none;
				-webkit-overflow-scrolling: touch;
			}
			[data-radix-scroll-area-viewport]::-webkit-scrollbar {
				display: none;
			}
		</style>

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
					{#each $headingStore as heading}
						{@const slug = slugify(stripHtmlTags(heading)) }
						<a
							href={`#${slug}`}
							on:click={(e) => scrollToHeading(e, slug)}
							class="py-1 ps-4 transition-colors data-[active=true]:font-medium data-[active=false]:text-primary"
							data-active="true"
						>
							{stripHtmlTags(heading)}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
