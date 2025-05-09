<script lang="ts">
	import Logo from '$lib/components/icons/Logo.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	href="/"
	variant="ghost"
	class="h-auto items-center hover:bg-transparent"
>
	<Logo class="size-10" />
	<div class="-mt-3 leading-[.2]">
		<p class="text-lg font-semibold text-primary dark:text-white">Jordan</p>
		<span class="text-shade-3 dark:text-muted-foreground">Recruitments</span>
	</div>
</Button>
