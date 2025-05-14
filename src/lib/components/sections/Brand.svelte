<script lang="ts">
	import Logo from '$lib/components/icons/Logo.svelte';

	interface Props {
		class?: string
	}

	let { class: className, ...rest }: Props = $props()
</script>

<a href="/" {...rest}>
	<div
		class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary dark:bg-white"
	>
		<Logo class="size-6" />
	</div>
	<div class="-mt-3 grid flex-1 text-left text-sm leading-[.2]">
		<p class="text-lg font-semibold text-primary dark:text-white">Jordan</p>
		<span class="text-shade-3 dark:text-muted-foreground">Recruitments</span>
	</div>
</a>
