<script lang="ts">
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="prose dark:prose-invert">
	{@html data.doc.content}
</div>
