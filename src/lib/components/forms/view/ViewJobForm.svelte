<script lang="ts">
	import type { iFile, iJob } from '$lib/interface';

	interface Props {
		class?: string;
		job: iJob;
	}

	let { class: className, job }: Props = $props();
	const file = job.file as iFile;
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-1">
		<div class="grid grid-cols-[40px_1fr] gap-1">
			<img src={file.url} class="size-6" alt={job.source} />
			<span class="text-sm font-medium">{job.source}</span>
		</div>
    <h2 class="prose dark:prose-invert">{job.title}</h2>
		<div>
			Location: {job.nature}
		</div>
		<div>
			Nature: {job.nature}
		</div>
	</div>

	<div class="prose dark:prose-invert">
		<h2>About the Job</h2>
		{@html job.content}
	</div>
</div>
