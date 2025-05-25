<script>
	import Care from "$lib/components/icons/care.svelte";
  import Cpu from "@lucide/svelte/icons/cpu";
  import Fingerprint from "@lucide/svelte/icons/fingerprint";
  import Pencil from "@lucide/svelte/icons/pencil";
  import Settings2 from "@lucide/svelte/icons/settings-2";
  import Sparkles from "@lucide/svelte/icons/sparkles";
  import Zap from "@lucide/svelte/icons/zap";
	import { ConstructionIcon, BrushIcon, GraduationCapIcon, CodeXmlIcon } from "lucide-svelte";
</script>

<section class="py-12 md:py-20">
  <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
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
      class="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div class="space-y-3">
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
          <Sparkles class="size-4" />

          <h3 class="text-sm font-medium">Built for AI</h3>
        </div>
        <p class="text-sm">
          It supports helping developers and businesses innovate.
        </p>
      </div>
    </div>
  </div>
</section>
