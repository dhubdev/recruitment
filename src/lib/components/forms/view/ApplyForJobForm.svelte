<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import type { iFile, iJob } from '$lib/interface';
	import { removeRingClasses } from '@toolsntuts/utils';
	import { Label } from '$lib/components/ui/label';
	import ImageDropZone from '$lib/components/ui/file-drop-zone/image-drop-zone.svelte';
	import TiptapEditor from '$lib/components/ui/tiptap-editor/tiptap-editor.svelte';
	import { FileDropZone } from '$lib/components/ui/file-drop-zone';
	import DropZone from '$lib/components/ui/file-drop-zone/drop-zone.svelte';

	interface Props {
		class?: string;
		job: iJob;
	}

	let { class: className, job }: Props = $props();

	let loading = $state(false);
	let content = $state('');
	let files = $state<iFile[]>();
	const file = job.file as iFile;

	const onsubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();

		const form = evt.target as HTMLFormElement;
		const formData = new FormData(form);
		const entries = Object.fromEntries(formData.entries());
	};

	const getcontent = (_content: string) => (content = _content);
	const onUploaded = (_file: iFile[]) => (files = _file);
</script>

<div class="grid aspect-square max-h-[70vh] w-full grid-cols-1 lg:aspect-video lg:grid-cols-2">
	<form class="w-full">
		<div>
			<Label for="title">Title</Label>
			<Input
				id="title"
				disabled={loading}
				required
				placeholder="Job title"
				name="title"
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
				class={removeRingClasses()}
			/>
		</div>
		<div>
			<Label for="email">Closing Date</Label>
			<Input
				id="email"
				type="email"
				disabled={loading}
				required
				placeholder="Job closing date"
				name="closingDate"
				class={removeRingClasses()}
			/>
		</div>
		<div>
			<Label for="email">Upload your CV & Application Letter Below</Label>
			<DropZone
				maxFileMB={10}
				maxFiles={1}
				accept="application/pdf"
				endpoint="/api/files"
				{onUploaded}
			/>
		</div>
	</form>
	<ScrollArea class="h-[calc(100%-56px)]">
		<div class="flex flex-col gap-4 p-2">
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-1">
					<img src={file.url} class="size-10" alt={job.source} />
					<h2 class="prose font-medium dark:prose-invert">{job.source}</h2>
				</div>
				<h2 class="prose dark:prose-invert">{job.title}</h2>
				<div class="capitalize">
					Location: {job.location}
				</div>
				<div class="capitalize">
					Nature: {job.nature}
				</div>
			</div>
			<div class="prose dark:prose-invert">
				<h2>About the Job</h2>
				{@html job.content}
			</div>
		</div>
	</ScrollArea>
</div>
