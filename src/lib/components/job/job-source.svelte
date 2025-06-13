<script lang="ts">
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import type { iFile, iJob } from '$lib/interface';

	interface Props {
		job: iJob;
	}

	let { job }: Props = $props();

	$effect(() => console.log({ job }))
</script>

<div class="flex items-center gap-2">
	<Avatar class="dark:bg-white size-10 items-center justify-center">
		<AvatarImage class="size-6" src={(job.file as iFile)?.url} alt={job.title} />
		<AvatarFallback class="uppercase">{job.title[0]}{job.title[1]}</AvatarFallback>
	</Avatar>
	<div class="flex flex-col">
		<p class="capitalize">{job.title}</p>
		<span class="text-sm text-muted-foreground">{job.source}</span>
	</div>
</div>
