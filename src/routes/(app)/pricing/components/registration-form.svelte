<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import Select from '$lib/components/ui/select/select.svelte';
	import { FileText, Upload, User } from 'lucide-svelte';
	import type { RegistrationData } from './registration.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';

	interface Props {
		onsubmit: (formData: RegistrationData) => void;
	}

	let { onsubmit }: Props = $props();

	let formData: RegistrationData = $state({
		fullName: '',
		email: '',
		phone: '',
		address: '',
		preferredCity: '',
		experience: '',
		cv: null,
		coverLetter: null
	});

	let cvFileName = $state('');
	let coverLetterFileName = $state('');

	const jordanCities = [
		'Manchester',
		'Salford',
		'Stockport',
		'Altrincham',
		'Sale',
		'Stretford',
		'Eccles',
		'Prestwich',
		'Urmston',
		'Denton',
		'Ashton-under-Lyne',
		'Bolton'
	].map((label) => ({ label, value: label.toLowerCase() }));

	const handleSubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();
		await onsubmit(formData);
	};

	const handleFileChange = (field: 'cv' | 'coverLetter', evt: Event) => {
		const target = evt.target as HTMLInputElement;
		const file = target.files?.[0] || null;
		formData = { ...formData, [field]: file };

		if (field === 'cv') {
			cvFileName = file?.name ?? '';
		} else {
			coverLetterFileName = file?.name ?? '';
		}
	};
</script>

<Card class="mx-auto max-w-2xl p-8">
	<div class="mb-8 text-center">
		<h2 class="mb-2 text-3xl font-bold text-foreground">Join Our Recruitment Program</h2>
		<p class="text-muted-foreground">
			Complete your registration to access our sponsorship packages
		</p>
	</div>

	<form onsubmit={handleSubmit} class="space-y-6">
		<div class="space-y-4">
			<h3 class="flex items-center gap-2 text-lg font-semibold text-foreground">
				<User class="h-5 w-5 text-primary" />
				Personal Information
			</h3>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<Label for="fullName">Full Name *</Label>
					<Input
						id="fullName"
						name="fullName"
						bind:value={formData.fullName}
						required
						placeholder="Enter your full name"
					/>
				</div>

				<div>
					<Label for="email">Email Address *</Label>
					<Input
						id="email"
						name="email"
						type="email"
						bind:value={formData.email}
						required
						placeholder="your.email@example.com"
					/>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<Label for="phone">Phone Number *</Label>
					<Input
						id="phone"
						name="phone"
						bind:value={formData.phone}
						required
						placeholder="+962 XXX XXX XXX"
					/>
				</div>

				<div>
					<Label for="preferredCity">Preferred Work City *</Label>
					<Select bind:value={formData.preferredCity} name="preferredCity" options={jordanCities} />
				</div>
			</div>

			<div>
				<Label for="address">Address *</Label>
				<Input
					id="address"
					name="address"
					value={formData.address}
					required
					placeholder="Enter your full address"
				/>
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="text-lg font-semibold text-foreground">Professional Background</h3>

			<div>
				<Label for="experience">Work Experience *</Label>
				<Textarea
					id="experience"
					name="experience"
					value={formData.experience}
					class="resize-none"
					required
					placeholder="Describe your work experience, skills, and qualifications..."
					rows={4}
				/>
			</div>
		</div>

		<div class="space-y-4">
			<h3 class="flex items-center gap-2 text-lg font-semibold text-foreground">
				<FileText class="h-5 w-5 text-primary" />
				Documents
			</h3>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<Label>CV/Resume *</Label>
					<div
						class="transition-smooth rounded-lg border-2 border-dashed border-border p-4 text-center hover:border-primary"
					>
						<input
							type="file"
							accept=".pdf,.doc,.docx"
							onchange={(e) => handleFileChange('cv', e)}
							class="hidden"
              name="cv"
							id="cv-upload" 
						/>
						<label for="cv-upload" class="cursor-pointer">
							<Upload class="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
							<p class="text-sm text-muted-foreground">
								{cvFileName || 'Upload your CV'}
							</p>
							<p class="mt-1 text-xs text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
						</label>
					</div>
				</div>

				<div>
					<Label>Cover Letter *</Label>
					<div
						class="transition-smooth rounded-lg border-2 border-dashed border-border p-4 text-center hover:border-primary"
					>
						<input
							type="file"
							accept=".pdf,.doc,.docx"
							onchange={(e) => handleFileChange('coverLetter', e)}
              name="coverLetter"
							class="hidden"
							id="cover-letter-upload" 
						/>
						<label for="cover-letter-upload" class="cursor-pointer">
							<Upload class="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
							<p class="text-sm text-muted-foreground">
								{coverLetterFileName || 'Upload your cover letter'}
							</p>
							<p class="mt-1 text-xs text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
						</label>
					</div>
				</div>
			</div>
		</div>

		<Button
			type="submit"
			class="bg-gradient-primary shadow-elegant w-full py-6 text-lg hover:opacity-90"
		>
			Complete Registration
		</Button>
	</form>
</Card>
