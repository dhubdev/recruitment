<script module>
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
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from 'lucide-svelte';
	import RegistrationForm from './registration-form.svelte';
	import { stepStore } from '$lib/stores';

  interface Props {
    registrationData: RegistrationData | null
  }

  let { registrationData = $bindable(null)}: Props = $props()

	const handleRegistrationSubmit = async (data: RegistrationData) => {
    registrationData = data
		const formData = new FormData();
		formData.set('fullName', data.fullName);
		formData.set('email', data.email);
		formData.set('phone', data.phone);
		formData.set('address', data.address);
		formData.set('preferredCity', data.preferredCity);
		formData.set('experience', data.experience);
		if (data.cv) {
			formData.set('cv', data.cv, data.cv.name);
		}
		if (data.coverLetter) {
			formData.set('coverLetter', data.coverLetter, data.coverLetter.name);
		}


		try {
			const options: RequestInit = {
				method: 'POST',
				body: formData
			};

      $stepStore = 'payment'
		} catch (error: any) {}
	};


  $effect(() => {
    if (registrationData) {
      console.log({ registrationData, from: "registration" })
    }
  })
</script>

<div class="min-h-screen bg-background px-4 py-12">
	<div class="mx-auto max-w-4xl">
		<Button variant="ghost" onclick={() => $stepStore = 'landing'} class="mb-6">
			<ArrowLeft class="mr-2 h-4 w-4" />
			Back to Home
		</Button>
		<RegistrationForm onsubmit={handleRegistrationSubmit} />
	</div>
</div>
