<script lang="ts">
	import { Calendar, User } from 'lucide-svelte'; 
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import type { iPost } from '$lib/interface';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const post: iPost = $state(data.post as iPost);

  $effect(() => console.log({ post }))
</script>

<Wrap>
	<div class="relative h-64 w-full md:h-96">
		<img src={post.imageUrl} alt={post.title} class="aspect-video" data-ai-hint={post.imageHint} />
		<div class="absolute inset-0 bg-black/50"></div>
	</div>
	<div class="container relative z-10 mx-auto -mt-24 px-6 md:-mt-32">
		<div class="mx-auto max-w-4xl rounded-lg bg-card p-8 shadow-xl md:p-12">
			<article>
				<header class="mb-8 text-center">
					<h1 class="font-headline text-3xl font-bold text-foreground md:text-5xl">
						{post.title}
					</h1>
					<div class="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
						<div class="flex items-center gap-2">
							<Calendar class="h-4 w-4" />
							<span
								>{new Date(post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}</span
							>
						</div>
						<div class="flex items-center gap-2">
							<User class="h-4 w-4" />
							<span>By {post.author}</span>
						</div>
					</div>
				</header>
				<div
					class="font-body prose-h2:font-headline prose prose-lg mx-auto max-w-none text-foreground/90 dark:prose-invert prose-h2:text-foreground"
				>
					{@html post.content}
				</div>
			</article>
		</div>
	</div>
</Wrap>
