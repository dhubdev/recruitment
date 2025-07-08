<script lang="ts">
	import BlogList from '$lib/components/lists/BlogList.svelte';
	import Admin from '$lib/components/sections/Admin.svelte';
	import { setContext } from 'svelte';
	import type { PageServerData } from './$types';

	
	let { data }: { data: PageServerData } = $props();

	setContext("blogs", data.blogs)
</script>

<Admin>
	<div class="flex-col">
		<div class="flex-1 space-y-4 p-4 pt-2">
			<BlogList />
		</div>
	</div>
</Admin>
