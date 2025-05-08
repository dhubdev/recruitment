<script lang="ts">
	import type { PageServerData } from './$types';
	import { page } from '$app/state';

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
</script>

<div>Homepage</div>