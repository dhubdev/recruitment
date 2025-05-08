<script lang="ts">
	import type { PageServerData } from './$types';
	import { page } from '$app/state';
	import Hero from '$lib/components/ui/hero/hero.svelte';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
</script>

<Hero
	type="center-content"
	title="🌍 Unlock Your Dream Job with Jordan Recruitments! 🚀"
	subline="We go beyond resumes — connecting talent to top-tier opportunities. 💼✨ Your next big move starts now. Let's get you hired! 🌟"
/>