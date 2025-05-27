<script lang="ts">
	import Care from '$lib/components/icons/care.svelte';
	import { Card } from '$lib/components/ui/card';
	import { getStyle } from '@toolsntuts/utils';
	import {
		ConstructionIcon,
		BrushIcon,
		GraduationCapIcon,
		CodeXmlIcon,
		WifiIcon
	} from 'lucide-svelte';

	interface iHowCanWeHelp {
		src: string;
		title: string;
		content: string;
	}

	let helps: iHowCanWeHelp[] = [
		{
			title: 'Last-Minute / Short-Notice Shifts',
			src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Flast.jpg&w=3840&q=75',
			content: `We understand that life can be unpredictable, and sometimes, you need work that fits your schedule at the last minute. That's why we're excited to introduce our exclusive offer to help job seekers like you find last-minute shifts that match your availability.`
		},
		{
			title: 'Holiday Cover',
			src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Fholi.jpg&w=3840&q=75',
			content: `Get offers that connects you with businesses seeking reliable individuals to cover shifts during the busy holiday period. We can also help you by connecting you with businesses seeking reliable individuals to cover shifts during the busy holiday period.`
		},
		{
			title: 'Long-Term Cover / Block Bookings',
			src: 'https://jordan-recruitments.vercel.app/_next/image?url=%2Flong.jpg&w=3840&q=75',
			content:
				'Explore a tailored experience that aligns seamlessly with your goals and opens doors to extended-term engagements and long-term cover or block booking opportunities.'
		}
	];
</script>

<section class="py-12 md:py-20">
	<div class="max-w-8xl mx-auto space-y-8">
		<div class="relative z-10 mx-auto max-w-xl text-center md:space-y-4">
			<h2 class="text-balance text-2xl font-medium lg:text-3xl">How can we help?</h2>
			<p class="text-muted-foreground">
				Here to help—real support, real solutions, right when you need them.
			</p>
		</div>

		<div
			class="relative mx-auto grid divide-x divide-y border bg-white dark:bg-background sm:grid-cols-2 lg:grid-cols-3"
		>
			{#each helps as { src, title, content }, i}
				{@const style = getStyle(src)}
				<div class="space-y-2">
					<div {style} class="aspect-video"></div>
					<div class="space-y-1 p-4">
						<p>{title}</p>
						<span class="text-balance text-muted-foreground line-clamp-2">{content}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
