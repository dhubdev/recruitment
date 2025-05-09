<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { getContext } from 'svelte';
	import { SettingsIcon, StoreIcon, ShapesIcon, BoxIcon, BaggageClaimIcon, RulerIcon, HouseIcon, CirclePlayIcon, RssIcon } from 'lucide-svelte';
	import type { iRoute, iUser } from '$lib/interface';
	import { page } from '$app/state';
	import Brand from './Brand.svelte';
	import Prayer from '../icons/Prayer.svelte';

	let me = getContext('me') as iUser;

	let {
		ref = $bindable(null),
		collapsible = 'icon',
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();


	let routes: iRoute[] = [
		{
			name: 'Overview',
			href: `/admin`,
			icon: StoreIcon
		},
		{
			name: 'Homepage',
			href: `/admin/homepage`,
			icon: HouseIcon
		},
		{
			name: 'Sermons',
			href: `/admin/sermons`,
			icon: CirclePlayIcon
		},
		{
			name: 'Prayer Cells',
			href: `/admin/prayercells`,
			icon: Prayer
		},
		{
			name: 'Blogs',
			href: `/admin/blogs`,
			icon: RssIcon
		},
		{
			name: 'Settings',
			href: `/admin/settings`,
			icon: SettingsIcon
		}
	];

	const pathname = $state(page.url.pathname)

	const isActive = (href: string) => href === pathname
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header class="border-b">
		<Brand />
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each routes as { href, name, icon: Icon } (href)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton variant={isActive(href) ? "outline" : "default"}>
								{#snippet child({ props })}
									<a {href} {...props}>
										<Icon class="size-4" />
										<span>{name}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
