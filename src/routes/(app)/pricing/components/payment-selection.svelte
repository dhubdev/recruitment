<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { CheckCircle, User } from 'lucide-svelte';
	import PricingCard from './pricing-card.svelte';

	interface Props {
		userData: {
			fullName: string;
			email: string;
			preferredCity: string;
		};
		onPackageSelect: (packageType: string, price: number) => void;
	}

	let { userData, onPackageSelect }: Props = $props();

	const packages = [
		{
			title: 'Starter Package',
			price: '£500',
			interviews: '1 Interview Opportunity',
			features: [
				'Professional CV recreation',
				'Cover letter optimization',
				'1 interview preparation session',
				'Interview readiness coaching',
				'Sponsorship guidance',
				'Job application support'
			],
			packageType: 'starter',
			priceValue: 500
		},
		{
			title: 'Professional Package',
			price: '£750',
			interviews: '2 Interview Opportunities',
			isPopular: true,
			features: [
				'Professional CV recreation',
				'Cover letter optimization',
				'2 interview preparation sessions',
				'Advanced interview coaching',
				'Sponsorship & visa guidance',
				'Job application support',
				'Follow-up assistance'
			],
			packageType: 'professional',
			priceValue: 750
		},
		{
			title: 'Premium Package',
			price: '£1,500',
			interviews: '3 Interview Opportunities',
			features: [
				'Professional CV recreation',
				'Cover letter optimization',
				'3 interview preparation sessions',
				'Comprehensive interview coaching',
				'Complete sponsorship support',
				'Priority job matching',
				'Ongoing career guidance',
				'90-day follow-up support'
			],
			packageType: 'premium',
			priceValue: 1500
		}
	];
</script>

<div class="mx-auto max-w-6xl">
	<Card class="mb-8 border-green-200 bg-gradient-to-r from-green-50 to-green-100 p-6">
		<div class="flex items-center gap-3">
			<CheckCircle class="h-6 w-6 text-green-600" />
			<div>
				<h3 class="font-semibold text-green-800">Registration Successful!</h3>
				<p class="text-green-700">
					Welcome {userData.fullName}! Your application has been received.
				</p>
			</div>
		</div>
	</Card>

	<Card class="mb-8 p-6">
		<h3 class="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
			<User class="h-5 w-5 text-primary" />
			Your Registration Details
		</h3>
		<div class="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
			<div>
				<span class="font-medium text-muted-foreground">Name:</span>
				<p class="text-foreground">{userData.fullName}</p>
			</div>
			<div>
				<span class="font-medium text-muted-foreground">Email:</span>
				<p class="text-foreground">{userData.email}</p>
			</div>
			<div>
				<span class="font-medium text-muted-foreground">Preferred City:</span>
				<p class="text-foreground">{userData.preferredCity}</p>
			</div>
		</div>
	</Card>

	<div class="mb-8 text-center">
		<h2 class="mb-4 text-3xl font-bold text-foreground">Choose Your Sponsorship Package</h2>
		<p class="mx-auto max-w-2xl text-muted-foreground">
			Select the package that best fits your needs. Each package includes professional CV
			recreation, interview preparation, and comprehensive sponsorship support to help you secure
			employment in Jordan.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		{#each packages as pkg, i}
			<PricingCard
				title={pkg.title}
				price={pkg.price}
				interviews={pkg.interviews}
				isPopular={pkg.isPopular}
				features={pkg.features}
				onSelect={() => onPackageSelect(pkg.packageType, pkg.priceValue)}
			/>
		{/each}
	</div>

	<Card class="mt-8 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
		<h3 class="mb-3 font-semibold text-blue-800">What happens next?</h3>
		<div class="space-y-2 text-sm text-blue-700">
			<p>• We'll call you within 24 hours to discuss your application</p>
			<p>• Your CV and cover letter will be professionally recreated</p>
			<p>• You'll receive comprehensive interview preparation</p>
			<p>• If you don't get a job after your interviews, you can purchase additional packages</p>
			<p>
				• Sponsorship means you get a visa to stay and work, leading to citizenship after 5 years
			</p>
		</div>
	</Card>
</div>
