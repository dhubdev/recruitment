<script lang="ts">
	import { aiSubmitForm, deleteResourceApi, submitForm } from '$lib/client/actions';
	import { defaultJob, locationOptions, natureOptions, Role } from '$lib/constants';
	import type { iFile, iJob, iUser } from '$lib/interface';
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
		job?: iJob;
	}

	const me = getContext('me') as iUser;

	let { job }: Props = $props();

	let loading = $state(false);
	let aiLoading = $state(false);

	const action = job ? 'Save changes' : 'Create';

	let placeholder = $state(job ? job : defaultJob);

	let aiContent = $state(placeholder.content);
	let content = $state(placeholder.content);

	const onsubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();

		loading = true;

		if (me.role !== Role.ADMIN) {
			toast.error('You are not authorized to perform this action');
		} else {
			await submitForm<iJob>(evt, {
				resource: 'jobs',
				data: { content, file: placeholder.file },
				entity: job
			});
		}

		loading = false;
	};

	const onFile = (file?: iFile) => (placeholder.file = file as iFile);

	const handleAiSubmit = async (evt: SubmitEvent) => {
		aiLoading = true;
		const result = await aiSubmitForm(evt, 'job');

		if (result) {
			console.log({ result });
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
		placeholder="Enter a short job listing (e.g., “Remote Content & Social Media Officer, full-time”) and AI will generate a detailed job description."
		class={cn(removeRingClasses(), 'resize-none')}
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
				placeholder="Job title"
				name="title"
				bind:value={placeholder.title}
				class={removeRingClasses()}
			/>
		</div>
		<div>
			<Label for="source">Source</Label>
			<Input
				id="source"
				disabled={loading}
				required
				placeholder="Job source (e.g. Jordan Recruitments)"
				name="source"
				bind:value={placeholder.source}
				class={removeRingClasses()}
			/>
		</div>
		<div>
			<Label for="closingDate">Closing Date</Label>
			<Input
				id="closingDate"
				type="datetime-local"
				disabled={loading}
				required
				placeholder="Job closing date"
				name="closingDate"
				bind:value={placeholder.closingDate}
				class={removeRingClasses()}
			/>
		</div>
		<div>
			<Label for="nature">Nature of the job</Label>
			<Select options={natureOptions} name="nature" bind:value={placeholder.nature} />
		</div>
		<div>
			<Label for="location">Location</Label>
			<Select options={locationOptions} name="location" bind:value={placeholder.location} />
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<ImageDropZone endpoint="/api/files" file={placeholder.file as iFile} {onFile} />
			{#key aiContent}
				<TiptapEditor {content} title="job content" {getcontent} />
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
