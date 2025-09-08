<script module>
	export interface RegistrationData {
		fullName: string;
		email: string;
		phone: string;
		country: string;
		experience: string;
		cv: File | null;
		coverLetter: File | null;
		maritalStatus: 'single' | 'married';
		employmentStatus: string;
		language: string;
		ageRange: string;
		qualification: string;
	}
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from 'lucide-svelte';
	import RegistrationForm from './registration-form.svelte';
	import { stepStore } from '$lib/stores';

	interface Props {
		registrationData: RegistrationData | null;
	}

	let { registrationData = $bindable(null) }: Props = $props();

	const handleRegistrationSubmit = async (data: RegistrationData) => {
		registrationData = data;
		const formData = new FormData();
		formData.set('fullName', data.fullName);
		formData.set('email', data.email);
		formData.set('phone', data.phone);
		formData.set('country', data.country);
		formData.set('experience', data.experience);
		formData.set('maritalStatus', data.maritalStatus);
		formData.set('employmentStatus', data.employmentStatus);
		formData.set('language', data.language);
		formData.set('ageRange', data.ageRange);
		formData.set('qualification', data.qualification);
		
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

			console.log(Object.fromEntries(formData.entries()));

			$stepStore = 'payment';
			const url = new URL(location.href);
			location.href = `${url.pathname}#top`;
		} catch (error: any) {}
	};

	$effect(() => {
		if (registrationData) {
			console.log({ registrationData, from: 'registration' });
		}
	});
</script>

<div class="min-h-screen bg-background px-4 py-12">
	<div class="mx-auto max-w-4xl">
		<Button variant="ghost" onclick={() => ($stepStore = 'landing')} class="mb-6">
			<ArrowLeft class="mr-2 h-4 w-4" />
			Back to Home
		</Button>
		<RegistrationForm onsubmit={handleRegistrationSubmit} />
	</div>
</div>
