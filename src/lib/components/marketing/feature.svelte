<script lang="ts">
	import { getStyle } from '@toolsntuts/utils';
	import Card from './card.svelte';
	import FeatureTable from './feature-table.svelte';
	import Badge from '../ui/badge/badge.svelte';

	interface iAbout {
		title: string;
		description: string;
		src: string;
		type: 'for employers' | 'job seekers';
	}

	const abouts: iAbout[] = [
		{
			title: 'Care Jobs',
			description: `Find compassionate and qualified professionals to enhance your caregiving team. From nurses to support staff, we connect you with individuals committed to providing exceptional care.`,
			src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fcare.jpg&w=3840&q=75',
			type: 'for employers'
		},
		// {
		// 	title: 'Cleaning Jobs',
		// 	description: `Ensure your spaces shine with our top-notch cleaning professionals. Whether it's commercial or residential, we match you with skilled individuals dedicated to maintaining a clean and healthy environment.`,
		// 	src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fclean.jpeg&w=3840&q=75',
		// 	type: 'for employers'
		// },
		// {
		// 	title: 'Security Jobs',
		// 	description: `Safety is paramount. Discover skilled security personnel to protect your premises. Our pool of candidates includes trained security officers and personnel to meet your specific security requirements.`,
		// 	src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fsecure.png&w=3840&q=75',
		// 	type: 'for employers'
		// },
		{
			title: 'Efficient Recruitment Process',
			description: `We streamline the hiring process, making it easy for you to find the right candidates. Our platform allows you to post jobs, review applications, and connect with potential hires seamlessly.`,
			src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fstrm.jpg&w=3840&q=75',
			type: 'for employers'
		},
		{
			title: 'Care Jobs',
			description: `Make a difference in people's lives. Explore opportunities in caregiving, nursing, and support roles.`,
			src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fcare.jpg&w=3840&q=75',
			type: 'job seekers'
		},
		// {
		// 	title: 'Cleaning Jobs',
		// 	description: `Join our network of cleaning professionals dedicated to maintaining pristine environments.`,
		// 	src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fclean.jpeg&w=3840&q=75',
		// 	type: 'job seekers'
		// },
		// {
		// 	title: 'Security Jobs',
		// 	description: `Protect and serve. Find fulfilling roles in the security industry.`,
		// 	src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fsecure.png&w=3840&q=75',
		// 	type: 'job seekers'
		// },
		{
			title: 'Career and Resource Guidance',
			description: `Access valuable resources, tips, and guidance to enhance your job search and career growth. We're here to support you every step of the way.`,
			src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fresos.jpg&w=3840&q=75',
			type: 'job seekers'
		}
	];

	const aboutStyle = getStyle(
		'https://jordan-recruitments.vercel.app/_next/image?url=%2Fempower.jpg&w=3840&q=75'
	);
</script>

<!-- Card Variant : soft  -->
<section>
	<div class="py-24">
		<div class="mx-auto w-full max-w-5xl">
			<div>
				<h2 class="text-4xl font-semibold text-foreground">
					Your Partner in Care, Cleaning, and Security Jobs
				</h2>
				<p class="mb-12 mt-4 text-balance text-muted-foreground">
					At Jordan recruitments, we understand the importance of finding the right talent for your
					care, cleaning, and security needs. Whether you're an employer seeking dedicated
					professionals or a job seeker looking for meaningful opportunities, we've got you covered.
				</p>
				<div class="overflow-hidden rounded-3xl bg-foreground/5">
					<div class="aspect-video size-full" style={aboutStyle}></div>
					<!-- <FeatureTable /> -->
				</div>
			</div>

			<div
				class="relative mt-16 grid gap-4 border-b border-foreground/10 pb-12 [--radius:1rem] md:grid-cols-2"
			>
				{#each abouts as { title, description, src, type }, i}
					{@const style = getStyle(src)}
					<div class="relative flex flex-col gap-1 py-4">
						<div>
							<h3 class="text-lg font-semibold text-foreground">{title}</h3>
							<Badge
								variant={type === 'for employers' ? 'destructive' : 'default'}
								class="capitalize">{type}</Badge
							>
						</div>
						<p class="my-4 text-muted-foreground">
							{description}
						</p>

						<Card variant="soft" class="mt-auto aspect-video overflow-hidden">
							<div class="size-full" {style}></div>
						</Card>
					</div>
				{/each}
			</div>
			<blockquote
				class="relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-primary"
			>
				<p class="text-lg text-foreground">
					The future belongs to those who believe in the beauty of their dreams.
				</p>
				<footer class="mt-4 flex items-center gap-2">
					<cite>Eleanor Roosevelt</cite>
				</footer>
			</blockquote>
		</div>
	</div>
</section>
