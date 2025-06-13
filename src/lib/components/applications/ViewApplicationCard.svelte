<script lang="ts">
	import type { iApplication, iFile } from "$lib/interface";

  interface Props {
    application: iApplication
  }

  let { application }: Props = $props()

  const { cv, applicationLetter: al } = application

  const coverLetter = cv as iFile
  const applicationLetter = al as iFile
</script>

<div class="grid grid-cols-1 gap-4">
  <iframe class="size-full aspect-square" src={coverLetter.url} frameborder="0" title="Cover Letter"></iframe>
  <hr/>
  <iframe class="size-full aspect-square" src={applicationLetter.url} frameborder="0" title="Resume"></iframe>
</div>