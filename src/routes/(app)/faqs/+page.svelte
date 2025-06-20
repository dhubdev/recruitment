<script lang="ts">
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Wrap class="prose dark:prose-invert">
	<h1>Frequently Asked Questions</h1>
	<p>Coming Soon...</p>
</Wrap>
