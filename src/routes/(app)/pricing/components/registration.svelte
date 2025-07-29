<script type="module">
	export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  preferredCity: string;
  experience: string;
  cv: File | null;
  coverLetter: File | null;
}
	</script>
<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ArrowLeft } from "lucide-svelte";
	import RegistrationForm from "./registration-form.svelte";
  import { stepStore } from "$lib/stores";


  const setCurrentStep = (step: 'landing' | 'registration' | 'payment') => {
    $stepStore = 'landing'
  }

  const handleRegistrationSubmit = async () => {
  }
</script>

<div class="min-h-screen bg-background py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<Button variant="ghost" onclick={() => setCurrentStep('landing')} class="mb-6">
			<ArrowLeft class="w-4 h-4 mr-2" />
			Back to Home
		</Button>
		<RegistrationForm onSubmit={handleRegistrationSubmit} />
	</div>
</div>
