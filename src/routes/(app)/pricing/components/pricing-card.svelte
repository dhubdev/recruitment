<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Check } from 'lucide-svelte';

	interface Props {
		title: string;
		price: string;
		interviews: string;
		isPopular?: boolean;
		features: string[];
		onSelect: () => void;
	}

	let { title, price, interviews, isPopular, features, onSelect }: Props = $props();
</script>

<Card
	class={`transition-smooth hover:shadow-elegant relative p-8 ${
		isPopular
			? 'to-primary-glow/5 border-2 border-primary bg-gradient-to-br from-primary/5'
			: 'border-border hover:border-primary/50'
	}`}
>
	{#if isPopular}
		<div class="absolute -top-3 left-1/2 -translate-x-1/2">
			<span
				class="bg-gradient-primary rounded-full px-4 py-1 text-sm font-medium text-primary-foreground"
			>
				Most Popular
			</span>
		</div>
	{/if}

	<div class="mb-6 text-center">
		<h3 class="mb-2 text-2xl font-bold text-foreground">{title}</h3>
		<div class="mb-4">
			<span class="text-4xl font-bold text-primary">{price}</span>
		</div>
		<p class="text-muted-foreground">{interviews}</p>
	</div>

	<ul class="mb-8 space-y-3">
		{#each features as feature, i}
			<li class="flex items-start gap-3">
				<Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
				<span class="text-sm text-foreground">{feature}</span>
			</li>
		{/each}
	</ul>

	<Button
		onclick={onSelect}
		class={`w-full ${isPopular ? 'bg-gradient-primary shadow-elegant hover:opacity-90' : ''}`}
		variant={isPopular ? 'default' : 'outline'}
	>
		Choose Package
	</Button>
</Card>
