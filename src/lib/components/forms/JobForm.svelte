<script lang="ts">
	import { aiSubmitForm, deleteResourceApi, submitForm } from '$lib/client/actions';
	import { defaultJob, Role } from '$lib/constants';
	import type { iFile, iJob, iUser } from '$lib/interface';
	import { getContext } from 'svelte';
	import { toast } from 'svelte-sonner';
	import Heading from '../sections/Heading.svelte';
	import DeleteAlertDialog from '../ui/alert-dialog/delete-alert-dialog.svelte';
	import { Trash2Icon } from 'lucide-svelte';
	import Separator from '../ui/separator/separator.svelte';
	import Textarea from '../ui/textarea/textarea.svelte';
	import { removeRingClasses } from '@toolsntuts/utils';
	import { Button } from '../ui/button';
	import SpinLoader from '../ui/spin-loader/spin-loader.svelte';
	import { Label } from '../ui/label';
	import { Input } from '../ui/input';
	import TiptapEditor from '../ui/tiptap-editor/tiptap-editor.svelte';
	import ImageDropZone from '../ui/file-drop-zone/image-drop-zone.svelte';
	import ScrollArea from '../ui/scroll-area/scroll-area.svelte';

	interface Props {
		job?: iJob;
	}

	const me = getContext('me') as iUser;

	let { job }: Props = $props();

	let loading = $state(false);
	let aiLoading = $state(false);

	const title = job ? 'Edit Job' : 'Create Job';
	const description = job ? 'Edit a Job' : 'Add a new Job';
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
			console.log({ result  })
			placeholder.title = result.qualityMetrics.title;
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
		placeholder="Paste blog name to generate AI content for blog"
		class={removeRingClasses()}
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
			<Label for="nature">Nature</Label>
			<Input
				id="nature"
				disabled={loading}
				required
				placeholder="Nature of the job (Remote / On-Site / Hybrid)"
				name="nature"
				bind:value={placeholder.nature}
				class={removeRingClasses()}
			/>
		</div>
		<div>
			<Label for="location">Location</Label>
			<Input
				id="location"
				disabled={loading}
				required
				placeholder="Job location"
				name="location"
				bind:value={placeholder.location}
				class={removeRingClasses()}
			/>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<ImageDropZone endpoint="/api/files" file={placeholder.file as iFile} {onFile} />
			{#key aiContent}
				<TiptapEditor {content} title="Blog content" {getcontent} />
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