<script lang="ts">
	import '../app.css';
	import { ClerkProvider } from 'svelte-clerk';
	import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';

	let { children } = $props();
</script>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
	<div class="flex flex-col gap-4">
		{@render children()}
	</div>
	<ModeWatcher />
	<Toaster richColors position="top-center" />
</ClerkProvider>
