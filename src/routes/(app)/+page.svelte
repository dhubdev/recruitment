<script lang="ts">
	import type { PageServerData } from './$types';
	import { page } from '$app/state';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import Services from './components/Services.svelte';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import HowCanWeHelp from './components/HowCanWeHelp.svelte';
	import DataTable from '$lib/components/ui/data-table/data-table-client.svelte';
	import { flatten } from '$lib/components/job';
	import { getColumns } from './column';
	import { jobStore, modalStore } from '$lib/stores';
	import type { iJob } from '$lib/interface';
	import type { iResult } from '@toolsntuts/utils';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';

	const columns = getColumns(modalStore);
	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	const getJobs = (result: iResult) => {
		$jobStore = result.data as iJob[];
		return result.data as iJob[];
	};

	const ondelete = () => {}
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
	<div id="services"></div>
	<Services />
</Wrap>

<Wrap>
	<HowCanWeHelp />
</Wrap>

<Wrap>
	{#await data.getJobs}
		<DataTable {flatten} {columns} data={[]} />
	{:then result}
		{@const jobs = getJobs(result)}
		<DataTable {ondelete} {flatten} {columns} data={jobs} />
	{:catch error}
		<AlertWidget
			variant="destructive"
			message={error.message}
			title="Error loading jobs"
			href={page.url.pathname}
			linkText="Reload"
		/>
	{/await}
</Wrap>
