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
	title="🌍 Your Gateway to Life-Changing Opportunities 🚀"
	subline="Ready to level up your career? At Jordan Recruitments, we don't just find you a job — we connect you with top-tier employers and unlock access to game-changing roles tailored to your skills and passion. 🔑✨
Let's turn your dream job into your next step. 💼🌟"
/>