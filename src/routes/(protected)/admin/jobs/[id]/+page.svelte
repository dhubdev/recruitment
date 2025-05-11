<script lang="ts">
	import type { PageServerData } from './$types';
	import JobForm from '$lib/components/forms/JobForm.svelte';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="p-4">
	{#await data.getJob}
		<p>Loading...</p>
	{:then result}
		{@const job = result.data}
		<JobForm {job} />
	{/await}
</div>
