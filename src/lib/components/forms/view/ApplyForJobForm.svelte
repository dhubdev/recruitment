<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import type { iApplication, iFile, iJob } from '$lib/interface';
	import { removeRingClasses, type iResult } from '@toolsntuts/utils';
	import { Label } from '$lib/components/ui/label';
	import ImageDropZone from '$lib/components/ui/file-drop-zone/image-drop-zone.svelte';
	import TiptapEditor from '$lib/components/ui/tiptap-editor/tiptap-editor.svelte';
	import { FileDropZone } from '$lib/components/ui/file-drop-zone';
	import DropZone from '$lib/components/ui/file-drop-zone/drop-zone.svelte';
	import { cn } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import { FileCheckIcon } from 'lucide-svelte';
	import SpinLoader from '$lib/components/ui/spin-loader/spin-loader.svelte';

	interface Props {
		class?: string;
		job: iJob;
	}

	let { class: className, job }: Props = $props();

	let loading = $state(false);
	let content = $state('');
	let cv = $state<iFile>();
	let applicationLetter = $state<iFile>();
	const file = job.file as iFile;

	const onsubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();

		const form = evt.target as HTMLFormElement;
		const formData = new FormData(form);
		const entries = Object.fromEntries(formData.entries());

		const partialApply: Partial<iApplication> = {
			...entries,
			job: job.xata_id,
			cv: cv?.xata_id,
			applicationLetter: applicationLetter?.xata_id
		};

		console.log({ partialApply });

		try {
			loading = true;
			const url = '/api/application';
			const options: RequestInit = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(partialApply)
			};
			const response = await fetch(url, options);
			const { message, status, data } = (await response.json()) as iResult;

			if (status === 'error') {
				toast.error(message);
			} else {
				const application = data as iApplication
				location.href = `/applications/${application.xata_id}`
				toast.success(message);
			}
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			loading = false;
		}
	};

	const getcontent = (_content: string) => (content = _content);

	const onCVUploaded = (cvs: iFile[]) => (cv = cvs[0]);
	const onApplicationLetterUploaded = (aLetter: iFile[]) => (applicationLetter = aLetter[0]);
</script>

<div class="">
	<div class="flex flex-col gap-4 p-2">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-1">
					<img src={file.url} class="size-10" alt={job.source} />
					<h2 class="prose font-medium dark:prose-invert">{job.source}</h2>
				</div>
				<div class="capitalize">
					Location: {job.location}
				</div>
				<div class="capitalize">
					Nature: {job.nature}
				</div>
			</div>
			<form class="grid grid-cols-1 gap-2" {onsubmit}>
				<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
					<Input
						id="name"
						disabled={loading}
						required
						placeholder="Your name"
						name="name"
						class={cn(removeRingClasses(), 'w-full')}
					/>
					<Input
						id="email"
						disabled={loading}
						required
						placeholder="Your email"
						name="email"
						class={cn(removeRingClasses(), 'w-full')}
					/>
				</div>
				<div>
					<DropZone
						title="Click to upload CV"
						maxFileMB={10}
						maxFiles={2}
						accept="application/pdf"
						endpoint="/api/files"
						onUploaded={onCVUploaded}
					/>
					<DropZone
						title="Click to upload application letter"
						maxFileMB={10}
						maxFiles={2}
						accept="application/pdf"
						endpoint="/api/files"
						onUploaded={onApplicationLetterUploaded}
					/>
				</div>
				{#if loading}
					<Button>
						<SpinLoader class="size-4" />
						<span>Loading...</span>
					</Button>
				{:else}
					<Button type="submit">
						<FileCheckIcon class="size-4" />
						<span>Apply</span>
					</Button>
				{/if}
			</form>
		</div>
		<div class="prose dark:prose-invert">
			<h2>About the Job</h2>
			{@html job.content}
		</div>
	</div>
</div>
