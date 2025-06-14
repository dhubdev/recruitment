<script lang="ts">
	import Logo from '$lib/components/icons/Logo.svelte';
	import { cn } from '$lib/utils';

	interface Props {
		class?: string;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<a href="/" {...rest} class={cn('flex items-center gap-2', className)}>
	<div
		class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary"
	>
		<Logo class="size-5" />
	</div>

	<div class="grid flex-1 text-left text-sm leading-[1]">
		<span class="truncate font-semibold text-primary dark:text-white text-[16px]">Jordan</span>
		<span class="truncate text-xs font-medium dark:text-muted-foreground">Recruitments</span>
	</div>
</a>
