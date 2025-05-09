<script lang="ts">
	import { SignUp, ClerkLoading, ClerkLoaded } from 'svelte-clerk';
	import { mode } from 'mode-watcher';
	import { dark } from '@clerk/themes';
	import SpinLoader from '$lib/components/ui/spin-loader/spin-loader.svelte';

	let baseTheme = $derived($mode === 'dark' ? [dark] : []);
	let variables = $state(
		$mode === 'dark'
			? {
					colorPrimary: '#3f39e8',
					colorTextOnPrimaryBackground: '#fff'
				}
			: {}
	);
</script>

<div class="flex flex-col items-center justify-center">
	<ClerkLoading>
		<SpinLoader class="size-16" />
	</ClerkLoading>
	<ClerkLoaded>
		<SignUp
			appearance={{
				baseTheme,
				variables,
				layout: {
					logoImageUrl: '/logo.png'
				}
			}}
		/>
	</ClerkLoaded>
</div>
