<script lang="ts">
	import type { iJob } from "$lib/interface";

  interface Props {
    job: iJob
  }

  let { job }: Props = $props()
</script>