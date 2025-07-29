<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { stepStore } from '$lib/stores';
	import { Award, Globe, Star, Users } from 'lucide-svelte';

  const onclick = () => {
    $stepStore = 'registration'
    const url = new URL(location.href)
    location.href = `${url.pathname}#top`
  }
</script>

<div class="min-h-screen bg-background">
	<section class="bg-gradient-hero relative px-4 py-20 text-white">
		<div class="mx-auto max-w-6xl text-center">
			<h1 class="mb-6 text-5xl font-bold md:text-6xl">Jordan Recruitment Pathways</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl text-white/90 md:text-2xl">
				Your gateway to sponsored employment in Jordan. We help international professionals secure
				jobs with visa sponsorship and a path to citizenship.
			</p>
			<Button
        {onclick}
				size="lg"
				class="shadow-elegant bg-white px-8 py-6 text-lg text-primary hover:bg-white/90"
			>
				Start Your Journey
			</Button>
		</div>
	</section>

	<section class="px-4 py-16">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-foreground">
				Why Choose Our Recruitment Service?
			</h2>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div class="text-center">
					<div
						class="bg-gradient-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
					>
						<Globe class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-2 text-xl font-semibold">Visa Sponsorship</h3>
					<p class="text-muted-foreground">
						Get full visa sponsorship and work authorization in Jordan
					</p>
				</div>

				<div class="text-center">
					<div
						class="bg-gradient-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
					>
						<Users class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-2 text-xl font-semibold">Expert Coaching</h3>
					<p class="text-muted-foreground">
						Professional CV recreation and comprehensive interview preparation
					</p>
				</div>

				<div class="text-center">
					<div
						class="bg-gradient-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
					>
						<Award class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-2 text-xl font-semibold">Proven Success</h3>
					<p class="text-muted-foreground">
						High success rate in securing employment for our candidates
					</p>
				</div>

				<div class="text-center">
					<div
						class="bg-gradient-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
					>
						<Star class="h-8 w-8 text-white" />
					</div>
					<h3 class="mb-2 text-xl font-semibold">Path to Citizenship</h3>
					<p class="text-muted-foreground">
						After 5 years of sponsored work, you can obtain Jordanian citizenship
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="px-4 py-16">
		<div class="mx-auto max-w-6xl">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-foreground">Choose Your Package</h2>
				<p class="mx-auto max-w-3xl text-xl text-muted-foreground">
					Select from our comprehensive sponsorship packages. Each includes professional CV
					recreation, interview preparation, and full sponsorship support.
				</p>
			</div>

			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div
					class="hover:shadow-elegant transition-smooth rounded-lg border border-border bg-card p-8 text-center"
				>
					<h3 class="mb-2 text-2xl font-bold text-foreground">Starter Package</h3>
					<div class="mb-4">
						<span class="text-4xl font-bold text-primary">£500</span>
					</div>
					<p class="mb-6 text-muted-foreground">1 Interview Opportunity</p>

					<ul class="mb-8 space-y-2 text-left">
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Professional CV recreation</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Cover letter optimization</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">1 interview preparation session</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Interview readiness coaching</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Sponsorship guidance</span>
						</li>
					</ul>

					<Button variant="outline" class="w-full" {onclick}>
						Get Started
					</Button>
				</div>

				<div
					class="hover:shadow-elegant transition-smooth relative rounded-lg border-2 border-primary bg-card p-8 text-center"
				>
					<div class="absolute -top-3 left-1/2 -translate-x-1/2">
						<span
							class="bg-gradient-primary rounded-full px-4 py-1 text-sm font-medium text-primary-foreground"
						>
							Most Popular
						</span>
					</div>

					<h3 class="mb-2 text-2xl font-bold text-foreground">Professional Package</h3>
					<div class="mb-4">
						<span class="text-4xl font-bold text-primary">£750</span>
					</div>
					<p class="mb-6 text-muted-foreground">2 Interview Opportunities</p>

					<ul class="mb-8 space-y-2 text-left">
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Professional CV recreation</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Cover letter optimization</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">2 interview preparation sessions</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Advanced interview coaching</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Sponsorship & visa guidance</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Follow-up assistance</span>
						</li>
					</ul>

					<Button
						class="bg-gradient-primary shadow-elegant w-full hover:opacity-90"
            {onclick}
					>
						Get Started
					</Button>
				</div>

				<div
					class="hover:shadow-elegant transition-smooth rounded-lg border border-border bg-card p-8 text-center"
				>
					<h3 class="mb-2 text-2xl font-bold text-foreground">Premium Package</h3>
					<div class="mb-4">
						<span class="text-4xl font-bold text-primary">£1,500</span>
					</div>
					<p class="mb-6 text-muted-foreground">3 Interview Opportunities</p>

					<ul class="mb-8 space-y-2 text-left">
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Professional CV recreation</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Cover letter optimization</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">3 interview preparation sessions</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Comprehensive interview coaching</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Complete sponsorship support</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">Priority job matching</span>
						</li>
						<li class="flex items-start gap-2">
							<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
							<span class="text-sm">90-day follow-up support</span>
						</li>
					</ul>

					<Button variant="outline" class="w-full" onclick={() => ($stepStore = 'registration')}>
						Get Started
					</Button>
				</div>
			</div>

			<div class="text-center">
				<p class="mb-4 text-muted-foreground">
					<strong>Important:</strong> If you don't get a job after your interviews, you can purchase
					additional packages. If you succeed in getting a job, no additional packages needed!
				</p>
			</div>
		</div>
	</section>

	<section class="bg-muted/50 px-4 py-16">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-foreground">How Our Process Works</h2>

			<div class="space-y-8">
				<div class="grid grid-cols-[32px_1fr] gap-4">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white"
					>
						1
					</div>
					<div>
						<h3 class="mb-2 text-xl font-semibold">Registration & Assessment</h3>
						<p class="text-muted-foreground">
							Complete our comprehensive registration form with your details, CV, and experience.
							We'll call you within 24 hours to discuss your profile.
						</p>
					</div>
				</div>

				<div class="grid grid-cols-[32px_1fr] gap-4">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white"
					>
						2
					</div>
					<div>
						<h3 class="mb-2 text-xl font-semibold">CV Recreation & Preparation</h3>
						<p class="text-muted-foreground">
							Our experts recreate your CV and cover letter to Jordan market standards. You'll
							receive interview preparation sessions and coaching.
						</p>
					</div>
				</div>

				<div class="grid grid-cols-[32px_1fr] gap-4">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white"
					>
						3
					</div>
					<div>
						<h3 class="mb-2 text-xl font-semibold">Interview Opportunities</h3>
						<p class="text-muted-foreground">
							Based on your package, you'll get 1-3 interview opportunities with sponsoring
							employers. If you don't succeed, you can purchase additional packages.
						</p>
					</div>
				</div>

				<div class="grid grid-cols-[32px_1fr] gap-4">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white"
					>
						4
					</div>
					<div>
						<h3 class="mb-2 text-xl font-semibold">Employment & Sponsorship</h3>
						<p class="text-muted-foreground">
							Once you secure a job, we help with visa processing and sponsorship documentation.
							After 5 years, you're eligible for Jordanian citizenship.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="px-4 py-16">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-6 text-3xl font-bold text-foreground">Ready to Start Your Career in Jordan?</h2>
			<p class="mb-8 text-xl text-muted-foreground">
				Join hundreds of professionals who have successfully secured sponsored employment in Jordan
			</p>
			<Button
        {onclick}
				size="lg"
				class="bg-gradient-primary shadow-elegant px-8 py-6 text-lg hover:opacity-90"
			>
				Register Now
			</Button>
		</div>
	</section>
</div>
