<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card } from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { PhoneCallIcon } from 'lucide-svelte';
	import Whatsapp from '../icons/whatsapp.svelte';

	const onsubmit = async (evt: SubmitEvent) => {
		const form = evt.target as HTMLFormElement;
		const formData = new FormData(form);
		const entries = Object.fromEntries(formData.entries());

		try {
		} catch (error: any) {}
	};
</script>

<section class="py-32">
	<div class="mx-auto max-w-4xl px-4 lg:px-0">
		<h1 class="mb-12 text-center text-4xl font-semibold lg:text-5xl">Help us route your inquiry</h1>

		<div class="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
			<Button href="tel:+447930739927" variant="ghost" class="size-full h-auto rounded-none">
				<PhoneCallIcon class="size-4" />
				<span>Collaborate</span>
			</Button>
			<Button
				href="https://api.whatsapp.com/send/?phone=%2B447930739927&text=Hello"
				variant="ghost"
				class="size-full h-auto rounded-none"
			>
				<Whatsapp class="size-4" />
				<span>Inquire</span>
			</Button>
		</div>

		<div
			class="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"
		></div>
		<form {onsubmit} class="border px-4 py-12 lg:px-0 lg:py-24">
			<Card class="mx-auto max-w-lg p-8 sm:p-16">
				<h3 class="text-xl font-semibold">Let's get you to the right place</h3>
				<p class="mt-4 text-sm">
					Reach out to our sales team! We’re eager to learn more about how you plan to use our
					application.
				</p>

				<div class="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
					<div>
						<Label for="name" class="space-y-2">Full name</Label>
						<Input type="text" id="name" required />
					</div>
					<div>
						<Label for="email" class="space-y-2">Email</Label>
						<Input type="email" id="email" required />
					</div>
					<div>
						<Label for="subject" class="space-y-2">Subject</Label>
						<Input type="subject" id="subject" required />
					</div>
					<div>
						<Label for="msg" class="space-y-2">Message</Label>
						<Textarea id="msg" rows={3} />
					</div>
					<Button type="submit">Submit</Button>
				</div>
			</Card>
		</form>
	</div>
</section>
