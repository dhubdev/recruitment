<script lang="ts">
  import { stepStore } from "$lib/stores";
	import Landing from "./landing.svelte";
	import Payment from "./payment.svelte";
	import Registration, { type RegistrationData } from "./registration.svelte";

  let registrationData = $state<RegistrationData | null>(null)

</script>

<div id="top"></div>

{#if $stepStore === 'registration'}
<Registration bind:registrationData />
{/if}

{#if $stepStore === 'payment' && registrationData}
<Payment {registrationData} />
{/if}

{#if $stepStore === 'landing'}
<Landing />
{/if}