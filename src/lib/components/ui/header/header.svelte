<script lang="ts">
	import ModeToggle from '$lib/components/ui/mode-toggle/mode-toggle.svelte';
	import Navigation from '$lib/components/ui/navigation/navigation.svelte';
	import User from '$lib/components/ui/user/user.svelte';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';

	interface Props {
		logo: any;
	}
	let { logo: Brand }: Props = $props();
</script>

<Wrap class="sticky left-0 top-0 z-[50] bg-white shadow-md dark:bg-secondary">
	<div class="relative flex h-14 items-center justify-between">
		<Brand />
		<div class="flex items-center gap-2">
			<Navigation class="hidden md:flex" />
			<div class="flex items-center gap-1 space-x-1">
				<ModeToggle />
				<User class="size-10" />
			</div>
		</div>
	</div>
</Wrap>
