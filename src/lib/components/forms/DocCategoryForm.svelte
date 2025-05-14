<script lang="ts">
	import { submitForm } from '$lib/client/actions';
	import { Role } from '$lib/constants';
	import type { iDocumentCategory, iUser } from '$lib/interface';
	import { getContext } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { Button } from '../ui/button';
	import SpinLoader from '../ui/spin-loader/spin-loader.svelte';
	import { Label } from '../ui/label';
	import { TagsInput } from '../ui/tags-input';

	interface Props {
		documentCategories?: iDocumentCategory[];
	}

	const me = getContext('me') as iUser;

	let { documentCategories }: Props = $props();

	let loading = $state(false);
	let aiLoading = $state(false);

	const action = documentCategories ? 'Save changes' : 'Create';

	let placeholder = $state(documentCategories ? documentCategories.map(dc => dc.category) : []);

	const onsubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();

		loading = true;

		if (me.role !== Role.ADMIN) {
			toast.error('You are not authorized to perform this action');
		} else {
			// await submitForm<iDocumentCategory>(evt, {
			// 	resource: 'documentCategoriess',
			// 	data: { content, file: placeholder.file },
			// 	entity: documentCategories
			// });
		}

		loading = false;
	};
</script>


<form {onsubmit} class="w-full space-y-4">
	<div class="grid grid-cols-1 gap-4">
		<div>
			<Label for="nature">Document Categories</Label>
			<TagsInput bind:value={placeholder} />
		</div>
	</div>
	{#if loading}
		<Button size="icon">
			<SpinLoader />
		</Button>
	{:else}
		<Button type="submit">{action}</Button>
	{/if}
</form>