<script lang="ts">
	import type { iFile, iPost } from '$lib/interface';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRight } from 'lucide-svelte';

	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	interface Props {
		post: iPost;
	}

	let { post }: Props = $props();

	const href = `/blogs/${post.slug}`;
</script>

<Card
	class="flex flex-col overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
>
	<a {href}>
		<img src={post.imageUrl} alt={post.title} class="aspect-video" data-ai-hint={post.imageHint} />
	</a>
	<CardHeader>
		<CardTitle class="font-headline text-2xl leading-tight">
			<a {href} class="transition-colors hover:text-primary">{post.title}</a>
		</CardTitle>
		<p class="pt-2 text-sm text-muted-foreground">
			{new Date(post.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})} by {post.author}
		</p>
	</CardHeader>
	<CardContent class="flex-grow">
		<p class="line-clamp-2 text-foreground/80">{post.excerpt}</p>
	</CardContent>
	<CardFooter>
		<Button href={`/blogs/${post.slug}`} variant="link" class="h-auto p-0 text-primary">
			Read More <ArrowRight class="ml-2 size-4" />
		</Button>
	</CardFooter>
</Card>
