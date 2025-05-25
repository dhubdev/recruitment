<script lang="ts">
	import type { PageServerData } from './$types';
	import { page } from '$app/state';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import Services from './components/Services.svelte';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
</script>

<Wrap>
	<Hero
		type="left-right-image"
		badge={{
			text: '💼 Your Career Launcher',
			url: '/listings'
		}}
		title="Unlock Your Dream Job with Jordan Recruitments! 🚀"
		subline="We go beyond resumes — connecting talent to top-tier opportunities. 💼✨ Your next big move starts now. Let's get you hired! 🌟"
		image={{
			src: './1920x1080.webp',
			alt: 'Jordan Recruitments'
		}}
		buttons={{
			primary: {
				text: 'Browse listings',
				url: '/listings'
			},
			secondary: {
				text: 'Contact Us',
				url: '/contact'
			}
		}}
	/>
</Wrap>
<Wrap class="bg-[#f5f5f5] dark:bg-secondary/20">
	<Services />
</Wrap>
