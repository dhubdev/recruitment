<script lang="ts">
	import type { iJob } from '$lib/interface';
	import { modalStore } from '$lib/stores';
	import { Button } from '../ui/button';

	interface Props {
		job: iJob;
	}

	let { job }: Props = $props();

	const onclick = () => {
		modalStore.update((existing) => ({
			...existing,
			open: true,
			data: job,
			title: job.title,
			description: 'Apply for the position',
			type: 'applyForJob'
		}));
	};
</script>

<Button variant="outline" {onclick}>Apply</Button>
