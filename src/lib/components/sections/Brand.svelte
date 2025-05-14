<script lang="ts">
	import Logo from '$lib/components/icons/Logo.svelte';
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<a href="/" {...rest} class={cn('flex items-center gap-1', className)}>
	<div
		class="flex aspect-square size-9 items-center justify-center rounded-lg bg-primary dark:bg-white"
	>
		<Logo class="size-6" />
	</div>
	<div class="grid flex-1 text-left text-sm leading-[.2]">
		<p class="font-semibold text-primary dark:text-white">Jordan</p>
		<span class="text-xs text-shade-3 dark:text-muted-foreground">Recruitments</span>
	</div>
</a>
