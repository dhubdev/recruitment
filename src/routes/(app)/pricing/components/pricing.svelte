<script lang="ts">
  import { stepStore } from "$lib/stores";
	import Landing from "./landing.svelte";
	import Payment from "./payment.svelte";
	import Registration, { type RegistrationData } from "./registration.svelte";

  let registrationData = $state<RegistrationData | null>(null)
</script>

{#if $stepStore === 'registration'}
<Registration bind:registrationData />
{:else if $stepStore === 'payment' && registrationData}
<Payment {registrationData} />
{:else}
<Landing />
{/if}