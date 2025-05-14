<script lang="ts">
	import { submitForm } from '$lib/client/actions';
	import { defaultDocumentCategory, Role } from '$lib/constants';
	import type { iDocumentCategory, iUser } from '$lib/interface';
	import { getContext } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { Button } from '../ui/button';
	import SpinLoader from '../ui/spin-loader/spin-loader.svelte';
	import { Label } from '../ui/label';
	import { removeRingClasses } from '@toolsntuts/utils';
	import { Input } from '../ui/input';

	interface Props {
		documentCategory?: iDocumentCategory;
		documentCategories?: iDocumentCategory[]
	}

	const me = getContext('me') as iUser;

	let { documentCategory }: Props = $props();

	let loading = $state(false);

	const action = documentCategory ? 'Save changes' : 'Create';

	let placeholder = $state(documentCategory ?? defaultDocumentCategory);

	const onsubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();

		loading = true;

		if (me.role !== Role.ADMIN) {
			toast.error('You are not authorized to perform this action');
		} else {
			await submitForm<iDocumentCategory>(evt, {
				resource: 'documentCategories',
				data: { content: undefined, file: undefined },
				entity: documentCategory
			});
		}

		loading = false;
	};
</script>


<form {onsubmit} class="w-full space-y-4">
	<div class="grid grid-cols-1 gap-4">
		<div>
			<Label for="category">Category</Label>
			<Input
				id="category"
				disabled={loading}
				required
				placeholder="Document Category"
				name="category"
				bind:value={placeholder.category}
				class={removeRingClasses()}
			/>
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