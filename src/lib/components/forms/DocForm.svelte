<script lang="ts">
	import { aiSubmitForm, submitForm } from '$lib/client/actions';
	import { defaultDoc, docOptions, Role } from '$lib/constants';
	import type { iFile, iDoc, iUser, iDocumentCategory } from '$lib/interface';
	import { getContext } from 'svelte';
	import { toast } from 'svelte-sonner';
	import Textarea from '../ui/textarea/textarea.svelte';
	import { removeRingClasses } from '@toolsntuts/utils';
	import { Button } from '../ui/button';
	import SpinLoader from '../ui/spin-loader/spin-loader.svelte';
	import { Label } from '../ui/label';
	import { Input } from '../ui/input';
	import TiptapEditor from '../ui/tiptap-editor/tiptap-editor.svelte';
	import ImageDropZone from '../ui/file-drop-zone/image-drop-zone.svelte';
	import Select from '../ui/select/select.svelte';
	import { cn } from '$lib/utils';

	interface Props {
		doc?: iDoc;
		documentCategories: iDocumentCategory[]
	}

	const me = getContext('me') as iUser;

	let { doc, documentCategories }: Props = $props();

	let loading = $state(false);
	let aiLoading = $state(false);

	const action = doc ? 'Save changes' : 'Create';
	const categoryOptions = documentCategories.map((docCat: iDocumentCategory) => ({ label: docCat.category, value: docCat.xata_id }))

	let placeholder = $state(doc ? doc : defaultDoc);

	let aiContent = $state(placeholder.content);
	let content = $state(placeholder.content);

	const onsubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();

		loading = true;

		if (me.role !== Role.ADMIN) {
			toast.error('You are not authorized to perform this action');
		} else {
			await submitForm<iDoc>(evt, {
				resource: 'docs',
				data: { content, file: placeholder.file },
				entity: doc
			});
		}

		loading = false;
	};

	const onFile = (file?: iFile) => (placeholder.file = file as iFile);

	const handleAiSubmit = async (evt: SubmitEvent) => {
		aiLoading = true;
		const result = await aiSubmitForm(evt, 'doc');

		if (result) {
			console.log({ result  })
			placeholder.content = result.qualityMetrics.content;
			aiContent = result.copy;
			content = result.copy;
		}
		aiLoading = false;
	};

	const getcontent = ($content: string) => (content = $content);
</script>

<form onsubmit={handleAiSubmit} class="space-y-2">
	<Textarea
		name="prompt"
		placeholder="Enter a short doc listing (e.g., “Remote Content & Social Media Officer, full-time”) and AI will generate a detailed doc description."
		class={cn(removeRingClasses(), "resize-none")}
	></Textarea>
	{#if aiLoading}
		<Button size="icon">
			<SpinLoader />
		</Button>
	{:else}
		<Button type="submit">Generate</Button>
	{/if}
</form>
<form {onsubmit} class="w-full space-y-4">
	<div class="grid grid-cols-1 gap-4">
		<div>
			<Label for="title">Title</Label>
			<Input
				id="title"
				disabled={loading}
				required
				placeholder="Doc title"
				name="title"
				bind:value={placeholder.title}
				class={removeRingClasses()}
			/>
		</div>
		<div>
			<Label for="nature">Type of Doc</Label>
			<Select options={docOptions} name="slug" bind:value={placeholder.slug} />
		</div>
		<div>
			<Label for="nature">Document Category</Label>
			<Select options={categoryOptions} name="category" value={(placeholder.category as iDocumentCategory).category} />
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<ImageDropZone endpoint="/api/files" file={placeholder.file as iFile} {onFile} />
			{#key aiContent}
				<TiptapEditor {content} title="doc content" {getcontent} />
			{/key}
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