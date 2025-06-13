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

<div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
  <iframe class="aspect-video" src={coverLetter.url} frameborder="0" title="Cover Letter"></iframe>
  <iframe class="aspect-video" src={applicationLetter.url} frameborder="0" title="Resume"></iframe>
</div>