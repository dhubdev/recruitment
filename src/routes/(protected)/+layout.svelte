<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import type { LayoutServerData } from './$types';
	import type { iDocumentCategory, iUser } from '$lib/interface';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/sections/AppSidebar.svelte';
	import DashboardHeader from '$lib/components/sections/DashboardHeader.svelte';
	import FormsModal from '$lib/components/widgets/FormsModal.svelte';
	import BackendDialog from '$lib/components/widgets/BackendDialog.svelte';
	import ViewDocDialog from '$lib/components/widgets/ViewDocDialog.svelte';
	import { docModalStore } from '$lib/stores';
	import AlertWidget from '$lib/components/ui/alert-widget/alert-widget.svelte';
	import { page } from '$app/state';
	import type { iResult } from '@toolsntuts/utils';

	let { data, children }: { data: LayoutServerData; children: Snippet } = $props();

	let me = data.me as iUser;

	setContext('me', me);

	const getDocumentCategories = (result: iResult) => {
		return { documentCategories: result.data as iDocumentCategory[] };
	};
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset class="bg-[#f5f5f5] dark:bg-background">
		<DashboardHeader />
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>
<FormsModal />
{#await data.getDocumentCategories}
	<BackendDialog />
{:then result}
	{@const { documentCategories } = getDocumentCategories(result)}
	<BackendDialog {documentCategories} />
{:catch error}
	<AlertWidget
		variant="destructive"
		message={error.message}
		title="Error loading jobs"
		href={page.url.pathname}
		linkText="Reload"
	/>
{/await}
{#if $docModalStore.open}
	<ViewDocDialog />
{/if}
