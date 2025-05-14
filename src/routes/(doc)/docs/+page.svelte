<script lang="ts">
	import Admin from '$lib/components/sections/Admin.svelte';
	import { Button } from '$lib/components/ui/button';
	import { PlusIcon } from 'lucide-svelte';
</script>

<Admin>
	<div class="flex h-full w-full flex-col items-center justify-center gap-4">
		<Button href="/docs">
			View Documents
			<PlusIcon class="size-4" />
		</Button>
	</div>
</Admin>
