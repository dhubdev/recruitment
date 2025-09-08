<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import Select from '$lib/components/ui/select/select.svelte';
	import { FileText, Upload, User } from 'lucide-svelte';
	import type { RegistrationData } from './registration.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import SpinLoader from '$lib/components/ui/spin-loader/spin-loader.svelte';

	interface Props {
		onsubmit: (formData: RegistrationData) => void;
	}

	let { onsubmit }: Props = $props();

	let formData: RegistrationData = $state({
		fullName: '',
		email: '',
		phone: '',
		country: '',
		experience: '',
		cv: null,
		coverLetter: null,
		maritalStatus: '',
		employmentStatus: '',
		language: '', // <-- added
		ageRange: '', // <-- added
		qualification: ''
	});

	let cvFileName = $state('');
	let coverLetterFileName = $state('');

	const maritalStatuses = ['Single', 'Married'].map((label) => ({
		label,
		value: label.toLowerCase()
	}));

	// Example usage in your Svelte file
	const employmentStatuses: { label: string; value: string }[] = [
		{ label: 'Employed', value: 'employed' },
		{ label: 'Unemployed', value: 'unemployed' },
		{ label: 'Self-Employed', value: 'self-employed' },
		{ label: 'Student', value: 'student' },
		{ label: 'Retired', value: 'retired' },
		{ label: 'Freelancer', value: 'freelancer' },
		{ label: 'Part-Time', value: 'part-time' },
		{ label: 'Intern', value: 'intern' }
	];

	const ageRanges = [
		{ label: '18-24', value: '18-24' },
		{ label: '25-34', value: '25-34' },
		{ label: '35-44', value: '35-44' },
		{ label: '45-54', value: '45-54' },
		{ label: '55+', value: '55+' }
	];

	const qualifications = [
		{ label: 'College', value: 'college' },
		{ label: 'University', value: 'university' },
		{ label: 'Masters', value: 'masters' },
		{ label: 'PhD', value: 'phd' }
	];

	let loading = $state(false);

	const handleSubmit = async (evt: SubmitEvent) => {
		evt.preventDefault();
		loading = true;
		await onsubmit(formData);
		loading = false;
	};

	const handleFileChange = (field: 'cv' | 'coverLetter', evt: Event) => {
		const target = evt.target as HTMLInputElement;
		const file = target.files?.[0] || null;
		// formData = { ...formData, [field]: file };

		formData[field] = file;

		if (field === 'cv') {
			cvFileName = file?.name ?? '';
		} else {
			coverLetterFileName = file?.name ?? '';
		}
	};
</script>

<Card class="mx-auto p-8">
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

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
					<Label for="country">Your country *</Label>
					<Input
						id="country"
						name="country"
						bind:value={formData.country}
						required
						placeholder="Nigeria"
					/>
				</div>
				<div>
					<Label for="maritalStatus">Your Marital Status *</Label>
					<Select
						options={maritalStatuses}
						bind:value={formData.maritalStatus}
						name="maritalStatus"
						placeholder="Marital Status"
					/>
				</div>
				<div>
					<Label for="employmentStatus">Your Employment Status *</Label>
					<Select
						options={employmentStatuses}
						bind:value={formData.employmentStatus}
						name="employmentStatus"
						placeholder="Employment Status"
					/>
				</div>
				<div>
					<Label for="language">Language *</Label>
					<Input
						id="language"
						name="language"
						bind:value={formData.language}
						required
						placeholder="Enter your preferred language"
					/>
				</div>
				<div>
					<Label for="ageRange">Age Range *</Label>
					<Select
						options={ageRanges}
						bind:value={formData.ageRange}
						name="ageRange"
						placeholder="Age Range"
						required
					/>
				</div>
				<div>
					<Label for="qualification">Qualification *</Label>
					<Select
						options={qualifications}
						bind:value={formData.qualification}
						name="qualification"
						placeholder="Qualification"
						required
					/>
				</div>
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
			disabled={loading}
			class="w-full bg-gradient-primary py-6 text-lg shadow-elegant hover:opacity-90"
		>
			{#if loading}
				<SpinLoader /> Loading...
			{:else}
				Complete Registration
			{/if}
		</Button>
	</form>
</Card>
