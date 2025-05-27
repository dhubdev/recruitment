<script lang="ts">
	import type { iFile, iJob } from '$lib/interface';

	interface Props {
		class?: string;
		job: iJob;
	}

	let { class: className, job }: Props = $props();
	const file = job.file as iFile;
</script>

<div class="flex flex-col gap-2">
	<div class="grid grid-cols-[40px_1fr] gap-4">
		<img src={file.url} alt={job.source} />
		<span class="text-sm font-medium">{job.source}</span>
	</div>

	<div class="">
		{job.nature}
	</div>

	<div class="prose dark:prose-invert">
		{@html job.content}
	</div>
</div>
