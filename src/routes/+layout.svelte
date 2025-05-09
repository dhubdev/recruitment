<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/ui/footer/footer.svelte';
	import { ClerkProvider } from 'svelte-clerk';
	import Header from '$lib/components/ui/header/header.svelte';
	import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Logo from '$lib/components/icons/Logo.svelte';

	let { children } = $props();
</script>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
	<Header logo={Logo} />
	<Wrap>
		<div class="flex flex-col gap-4">
			{@render children()}
		</div>
	</Wrap>
	<Footer
		slogan="Unlock Your Dream Job"
		logo={Logo}
		organizationName="Jordan Recruitments"
	/>
	<ModeWatcher />
</ClerkProvider>
