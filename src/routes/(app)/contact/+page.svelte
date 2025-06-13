<script lang="ts">
	import ContactUsForm from '$lib/components/forms/ContactUsForm.svelte';
	import Wrap from '$lib/components/ui/wrap/wrap.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>
<Wrap>
	<ContactUsForm />
</Wrap>