<script lang="ts">
  import { stepStore } from "$lib/stores";
	import Landing from "./landing.svelte";
	import Payment from "./payment.svelte";
	import Registration, { type RegistrationData } from "./registration.svelte";

  let registrationData = $state<RegistrationData | null>(null)

  $effect(() => {
    if (registrationData) {
      console.log({ registrationData, from: "pricing", stepStore: $stepStore })
    }
  })
</script>

{#if $stepStore === 'registration'}
<Registration bind:registrationData />
{/if}

{#if $stepStore === 'payment' && registrationData}
<Payment {registrationData} />
{/if}

{#if $stepStore === 'landing'}
<Landing />
{/if}