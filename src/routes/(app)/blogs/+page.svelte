<script lang="ts">
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import type { iPost } from '$lib/interface';
	import type { PageData } from './$types';
	import BlogCard from "$lib/components/frontend/cards/Blogcard.svelte"

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()

	let blogPosts: iPost[] = $state(data.posts);

	$effect(() => console.log({ posts: data.posts }))
</script>

<Wrap>
	<section class="bg-primary/20 py-20 md:py-28">
		<div class="container mx-auto px-6 text-center">
			<h1 class="text-4xl md:text-6xl font-headline font-bold">Our Blog</h1>
			<p class="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
				Resources, insights, and encouragement for the journey towards landing your dream job
			</p>
		</div>
	</section>

	<section class="py-16 md:py-24">
		<div class="container mx-auto px-6">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each blogPosts as post, i}
					<BlogCard {post} />
				{/each}
			</div>
		</div>
	</section>
</Wrap>
