<script lang="ts">
	import Feature from '$lib/components/marketing/feature.svelte';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Wrap>
	<Feature />
</Wrap>