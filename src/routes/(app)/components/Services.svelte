<script>
	import Care from "$lib/components/icons/care.svelte"; 
  import Sparkles from "@lucide/svelte/icons/sparkles"; 
	import { ConstructionIcon, BrushIcon, GraduationCapIcon, CodeXmlIcon, WifiIcon } from "lucide-svelte";
</script>

<section class="py-12 md:py-20">
  <div class="mx-auto max-w-8xl space-y-8 md:space-y-16">
    <div
      class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12"
    >
      <h2 class="text-balance text-4xl font-medium lg:text-5xl">
        The platform for global job opportunities
      </h2>
      <p>
        From local roles to international placements, we connect talent to a wide range of careers across industries and borders.
      </p>
    </div>

    <div
      class="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3 bg-white dark:bg-background"
    >
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <ConstructionIcon class="size-4" />
          <h3 class="text-sm font-medium">Construction</h3>
        </div>
        <p class="text-sm">
          Careers for builders at every level.
        </p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <BrushIcon class="size-4" />
          <h3 class="text-sm font-medium">Cleaning</h3>
        </div>
        <p class="text-sm">
          Where cleanliness meets professionalism.
        </p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Care class="size-4" />

          <h3 class="text-sm font-medium">Care</h3>
        </div>
        <p class="text-sm">Compassion in action, care that counts.</p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <GraduationCapIcon class="size-4" />

          <h3 class="text-sm font-medium">Education</h3>
        </div>
        <p class="text-sm">
          Opportunities for educators to lead and inspire.
        </p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <CodeXmlIcon class="size-4" />

          <h3 class="text-sm font-medium">Information Technology</h3>
        </div>
        <p class="text-sm">
          Powering innovation through talent and tech.
        </p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <WifiIcon class="size-4" />

          <h3 class="text-sm font-medium">Remote</h3>
        </div>
        <p class="text-sm">
          Work from anywhere, thrive everywhere.
        </p>
      </div>
    </div>
  </div>
</section>
