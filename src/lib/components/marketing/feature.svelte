<script lang="ts">
	import { getStyle } from '@toolsntuts/utils';
	import Card from './card.svelte';
	import FeatureTable from './feature-table.svelte';

  const careJobs = 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fcare.jpg&w=3840&q=75'

  const cleaningJobs = 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fclean.jpeg&w=3840&q=75'

  const securityJobs = 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fsecure.png&w=3840&q=75'

  const efficientRecruitment = 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fstrm.jpg&w=3840&q=75'

  const careerResourceGuidance = 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fresos.jpg&w=3840&q=75'

  const styleCareJobs = getStyle(careJobs)
  const styleCleaningJobs = getStyle(cleaningJobs)
  const styleSecurityJobs = getStyle(securityJobs)
  const styleEfficientRecruitment = getStyle(efficientRecruitment)
  const styleCareerResourceGuidance = getStyle(careerResourceGuidance)
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
				<div class="rounded-3xl bg-foreground/5 p-6">
					<FeatureTable />
				</div>
			</div>

			<div class="flex flex-col items-center mt-12">
				<h2 class="text-xl md:text-2xl">For Employers</h2>
				<p class="text-muted-foreground text-lg">Tailored solutions towards your business</p>
			</div>
			<div
				class="relative mt-16 grid gap-12 border-b border-foreground/10 pb-12 [--radius:1rem] md:grid-cols-2"
			>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Care Jobs</h3>
					<p class="my-4 text-muted-foreground">
						Find compassionate and qualified professionals to enhance your caregiving team. From
						nurses to support staff, we connect you with individuals committed to providing
						exceptional care.
					</p>
					<Card variant="soft" class="aspect-video overflow-hidden px-6">
            <div class="size-full" style={styleCareJobs}></div>
					</Card>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Cleaning Jobs</h3>
					<p class="my-4 text-muted-foreground">
						Ensure your spaces shine with our top-notch cleaning professionals. Whether it's
						commercial or residential, we match you with skilled individuals dedicated to
						maintaining a clean and healthy environment.
					</p>

					<Card variant="soft" class="aspect-video overflow-hidden">
            <div class="size-full" style={cleaningJobs}></div>
					</Card>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Security Jobs</h3>
					<p class="my-4 text-muted-foreground">
						Safety is paramount. Discover skilled security personnel to protect your premises. Our
						pool of candidates includes trained security officers and personnel to meet your
						specific security requirements.
					</p>

					<Card variant="soft" class="aspect-video overflow-hidden">
            <div class="size-full" style={securityJobs}></div>
					</Card>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Efficient Recruitment Process</h3>
					<p class="my-4 text-muted-foreground">
						We streamline the hiring process, making it easy for you to find the right candidates.
						Our platform allows you to post jobs, review applications, and connect with potential
						hires seamlessly.
					</p>

					<Card variant="soft" class="aspect-video overflow-hidden">
            <div class="size-full" style={styleEfficientRecruitment}></div>
					</Card>
				</div>
			</div>

			<div class="flex flex-col items-center mt-12">
				<h2 class="text-xl md:text-2xl">For Job Seekers</h2>
				<p class="text-muted-foreground text-lg">Explore rewarding opportunities</p>
			</div>
			<div
				class="relative mt-16 grid gap-12 border-b border-foreground/10 pb-12 [--radius:1rem] md:grid-cols-2"
			>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Care Jobs</h3>
					<p class="my-4 text-muted-foreground">
						Make a difference in people's lives. Explore opportunities in caregiving, nursing, and
						support roles.
					</p>
					<Card variant="soft" class="aspect-video overflow-hidden px-6">
            <div class="size-full" style={styleCareJobs}></div>
					</Card>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Cleaning Jobs</h3>
					<p class="my-4 text-muted-foreground">
						Join our network of cleaning professionals dedicated to maintaining pristine
						environments.
					</p>

					<Card variant="soft" class="aspect-video overflow-hidden">
            <div class="size-full" style={styleCleaningJobs}></div>
					</Card>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Security Jobs</h3>
					<p class="my-4 text-muted-foreground">
						Protect and serve. Find fulfilling roles in the security industry.
					</p>

					<Card variant="soft" class="aspect-video overflow-hidden">
            <div class="size-full" style={styleSecurityJobs}></div>
					</Card>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-foreground">Career and Resource Guidance</h3>
					<p class="my-4 text-muted-foreground">
						Access valuable resources, tips, and guidance to enhance your job search and career
						growth. We're here to support you every step of the way.
					</p>

					<Card variant="soft" class="aspect-video overflow-hidden">
            <div class="size-full" style={styleCareerResourceGuidance}></div>
					</Card>
				</div>
			</div>
			<blockquote
				class="relative mt-12 max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-primary"
			>
				<p class="text-lg text-foreground">
					Wow, auto-generated pages are the kind of thing that you don't even know you need until
					you see it. It's like an AI-native CRM.
				</p>
				<footer class="mt-4 flex items-center gap-2">
					<cite>Méschac Irung</cite>
					<span aria-hidden="true" class="size-1 rounded-full bg-foreground/15"></span>
					<span class="text-muted-foreground">Creator</span>
				</footer>
			</blockquote>
		</div>
	</div>
</section>
