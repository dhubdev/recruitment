<script lang="ts">
	import type { iUser } from '$lib/interface';
	import type { LayoutData } from './$types';
	import { setContext, type Snippet } from 'svelte';
	import { metaStore } from '$lib/stores';
	import Header from '$lib/components/ui/header/header.svelte';
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import Logo from '$lib/components/icons/Logo.svelte';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let me = data.me as iUser;

	setContext('me', me);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{$metaStore.title}</title>
	<meta name="title" content={$metaStore.title} />
	<meta name="description" content={$metaStore.description} />
	<meta name="keywords" content={$metaStore.keywords.join(', ')} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$metaStore.link} />
	<meta property="og:title" content={$metaStore.title} />
	<meta property="og:description" content={$metaStore.description} />
	<meta property="og:image" content={$metaStore.ogimage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={$metaStore.link} />
	<meta property="twitter:title" content={$metaStore.title} />
	<meta property="twitter:description" content={$metaStore.description} />
	<meta property="twitter:image" content={$metaStore.ogimage} />
</svelte:head>
<div class="bg-body dark:bg-background">
	<Header logo={Logo} />
	<Wrap>
		{@render children()}
	</Wrap>
	<Footer slogan="Unlock Your Dream Job" logo={Logo} organizationName="Jordan Recruitments" />
</div>
<!-- <BottomNav /> -->
