<script lang="ts" module>
	export interface iHeading {
		id: string;
		text: string;
	}

	export interface iDocumentation {
		title: string;
		slug: string;
	}

	export interface iSection {
		id: string;
		title: string;
		content: string;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { Drawer, DrawerContent, DrawerTrigger } from '../drawer';
	import { Button, buttonVariants } from '../button';
	import { cn } from '$lib/utils';
	import { MenuIcon } from 'lucide-svelte';
	import { ScrollArea } from '../scroll-area';

	interface Props {
		documentations: iDocumentation[];
		headings: iHeading[];
		sections: iSection[];
	}

	let { documentations, headings, sections }: Props = $props();
	const activeHeading = writable<string>('');

	const observation = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				activeHeading.set(entry.target.id);
			}
		});
	};

	const options: IntersectionObserverInit = { rootMargin: '0px 0px -70% 0px', threshold: 0.1 };

	onMount(() => {
		const observer = new IntersectionObserver(observation, options);

		headings.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<div class="flex min-h-screen flex-col">
	<header
		class="sticky top-14 z-40 flex items-center justify-between border-b bg-white py-4 shadow-sm dark:bg-background lg:hidden"
	>
		<Drawer>
			<DrawerTrigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
				<MenuIcon />
			</DrawerTrigger>
			<DrawerContent class="p-6">
				<h2 class="mb-4 text-lg font-semibold">All Blogs</h2>
				<ScrollArea class="h-60">
					<ul class="space-y-2">
						{#each documentations as post}
							<li>
								<a href={post.slug} class="block truncate hover:text-blue-600">{post.title}</a>
							</li>
						{/each}
					</ul>
				</ScrollArea>
			</DrawerContent>
		</Drawer>

		<Drawer>
			<DrawerTrigger><Button variant="outline" size="sm">On This Page</Button></DrawerTrigger>
			<DrawerContent class="p-6">
				<h2 class="mb-4 text-lg font-semibold">On This Page</h2>
				<ScrollArea class="h-60">
					<ul class="space-y-2 text-sm">
						{#each headings as h}
							<li>
								<a
									href={'#' + h.id}
									class={cn(
										'block hover:text-blue-600',
										$activeHeading === h.id ? 'font-medium text-blue-600' : 'text-gray-600'
									)}>{h.text}</a
								>
							</li>
						{/each}
					</ul>
				</ScrollArea>
			</DrawerContent>
		</Drawer>
	</header>

	<div class="flex w-full flex-1">
		<aside
			class="sticky top-20 hidden w-64 overflow-y-auto border-r border-muted-foreground/20 p-6 md:block"
		>
			<h2 class="mb-4 text-xl font-semibold">All Blogs</h2>
			<ul class="space-y-2">
				{#each documentations as post}
					<li><a href={post.slug} class="block truncate hover:text-blue-600">{post.title}</a></li>
				{/each}
			</ul>
		</aside>

		<main class="prose max-w-4xl flex-1 dark:prose-invert lg:px-4">
			{#each sections as section}
				<section id={section.id}>
					<h2>{section.title}</h2>
					{@html section.content}
				</section>
			{/each}
		</main>

		<aside
			class="sticky top-20 hidden w-64 overflow-y-auto border-l border-muted-foreground/20 p-6 lg:block"
		>
			<h2 class="mb-4 text-xl font-semibold">On This Page</h2>
			<ul class="space-y-2 text-sm">
				{#each headings as h}
					<li>
						<a
							href={'#' + h.id}
							class={cn(
								'block hover:text-blue-600',
								$activeHeading === h.id ? 'font-medium text-blue-600' : 'text-gray-600'
							)}>{h.text}</a
						>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
