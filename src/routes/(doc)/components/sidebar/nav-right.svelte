<script lang="ts">
	import { TextIcon } from 'lucide-svelte';

	import { headingStore } from '$lib/stores';
	import { onMount } from 'svelte';
	import { extractTopLevelTagsWithSlugIds, slugify, stripHtmlTags } from '$lib/fxns';

	let tags = $state();
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
					{#each $headingStore as heading, i}
						<a
							data-active="true"
							href={`#${slugify(heading)}`}
							class="py-1 ps-4 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary"
							>{stripHtmlTags(heading)}</a
						>
					{/each}
					<!-- <a
						data-active="false"
						href="#features"
						class="py-1 ps-7 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary"
						>Features</a
					><a
						data-active="false"
						href="#tech-stack"
						class="py-1 ps-7 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary"
						>Tech Stack</a
					><a
						data-active="false"
						href="#quick-setup"
						class="py-1 ps-7 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary"
						>Quick Setup</a
					> -->
				</div>
			</div>
		</div>
	</div>
</div>
