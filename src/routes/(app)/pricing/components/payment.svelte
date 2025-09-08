<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { ArrowLeft } from "lucide-svelte";
	import type { RegistrationData } from "./registration.svelte";
	import { stepStore } from "$lib/stores";
	import PaymentSelection from "./payment-selection.svelte";

  interface Props {
    registrationData: RegistrationData
  }

  let { registrationData }: Props = $props()

  const handlePackageSelect = (packageType: string, price: number) => {
    // Here you would integrate with Stripe or your payment processor
    console.log('Selected package:', packageType, 'Price:', price)
    alert(`Payment for ${packageType} package (£${price}) would be processed here`)
  }
    const onclick = () => {
    $stepStore = 'registration'
    const url = new URL(location.href)
    location.href = `${url.pathname}#top`
  }
</script>

<div class="min-h-screen bg-background py-12 px-4">
	<div class="max-w-6xl mx-auto">
		<Button variant="ghost" {onclick} class="mb-6">
			<ArrowLeft class="w-4 h-4 mr-2" />
			Back to Registration
		</Button>
		<PaymentSelection
			userData={registrationData}
			onPackageSelect={handlePackageSelect}
		/>
	</div>
</div>
