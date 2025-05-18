<script lang="ts">
	import type { PageServerData } from './$types';
	import DocForm from '$lib/components/forms/DocForm.svelte';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="p-4">
	{#await data.getDocument}
		<p>Loading...</p>
	{:then result}
		{@const doc = result.data}
		<DocForm {doc} />
	{/await}
</div>
