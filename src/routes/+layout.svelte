<script lang="ts">
	import '../app.css';
	import { ClerkProvider } from 'svelte-clerk';
	import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
	<Wrap>
		<div class="flex flex-col gap-4">
			{@render children()}
		</div>
	</Wrap>
	<ModeWatcher />
</ClerkProvider>
