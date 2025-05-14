<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { getContext } from 'svelte';
	import { SettingsIcon, StoreIcon, HouseIcon, BriefcaseIcon, FileTextIcon } from 'lucide-svelte';
	import type { iRoute, iUser } from '$lib/interface';
	import { page } from '$app/state';
	import Brand from './Brand.svelte';
	import { Role } from '$lib/constants';
	import Logo from '../icons/Logo.svelte';

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
			name: 'Jobs',
			href: `/admin/jobs`,
			icon: BriefcaseIcon
		},
		{
			name: 'Documents',
			href: `/admin/docs`,
			icon: FileTextIcon
		},
		{
			name: 'Settings',
			href: `/admin/settings`,
			icon: SettingsIcon
		}
	];

	const pathname = $state(page.url.pathname);

	const isActive = (href: string) => href === pathname;
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
	<Sidebar.Header class="border-b">
		<!-- <Brand /> -->
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<Brand {...props} />
						<!-- <a href="/" {...props}>
							<div
								class="flex aspect-square size-10 items-center justify-center rounded-lg bg-sidebar-primary dark:bg-white"
							>
								<Logo class="size-4" />
							</div>
							<div class="grid flex-1 text-left text-sm -mt-3 leading-[.2]">
								<p class="text-lg font-semibold text-primary dark:text-white">Jordan</p>
								<span class="text-shade-3 dark:text-muted-foreground">Recruitments</span>
							</div>
						</a> -->
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each routes as { href, name, icon: Icon } (href)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton variant={isActive(href) ? 'outline' : 'default'}>
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
