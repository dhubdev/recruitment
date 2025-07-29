<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
		centerClass?: string
	}

	let { children, class: className, centerClass }: Props = $props();
</script>

<div class={className}>
	<div class={cn("px-4 py-0 md:container", centerClass)}>
		{@render children()}
	</div>
</div>
