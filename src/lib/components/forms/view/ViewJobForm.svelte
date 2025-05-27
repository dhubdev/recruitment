<script lang="ts">
	import type { iJob } from "$lib/interface";

  interface Props {
    class?: string;
    job: iJob
  }

  let { class: className, job }: Props = $props()
</script>


<div class="prose dark:prose-invert">
  {@html job.content}
</div>