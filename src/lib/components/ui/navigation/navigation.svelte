<script module>
	import { getContext } from 'svelte';
	import { Role } from '$lib/constants/index';
</script>

<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils/index';
	import type { iRoute, iUser } from '$lib/interface/index';
	import { Button } from '$lib/components/ui/button';

	interface Props {
		class?: string;
		links?: iRoute[];
	}

	const me = getContext('me') as iUser;
	let defaultLinks: iRoute[] = [
		{
			name: 'home',
			href: '/',
			isAuthorized: true
		},
		{
			name: 'admin',
			href: '/admin',
			isAuthorized: me?.role === Role.ADMIN
		},
		{
			name: 'about',
			href: '/about',
			isAuthorized: true
		}
	];
	let { class: className, links = defaultLinks }: Props = $props();

	const pathname = page.url.pathname;
	const isActiveRoute = (path: string) => pathname === path;
</script>

<div class={cn('flex gap-2', className)}>
	{#each links as { href, name, isAuthorized }, i}
		{#if isAuthorized}
			<Button
				{href}
				class="rounded-full capitalize"
				variant={isActiveRoute(href) ? 'default' : 'outline'}
			>
				{name}
			</Button>
		{/if}
	{/each}
</div>
