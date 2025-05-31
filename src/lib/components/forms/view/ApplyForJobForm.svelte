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
		<div class="flex items-center gap-1">
			<img src={file.url} class="size-10" alt={job.source} />
			<h2 class="font-medium prose dark:prose-invert">{job.source}</h2>
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
