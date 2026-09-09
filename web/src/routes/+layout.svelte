<script lang="ts">
	import '../app.css';

	import Analytics from '$components/Analytics.svelte';
	import ConsoleCredit from '$components/ConsoleCredit.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Navigation from '$components/Navigation.svelte';
	import PreviewMode from '$components/PreviewMode.svelte';

	let { children, data } = $props();
</script>

<PreviewMode enabled={data.previewEnabled}>
	<Navigation />

	{#key data.pathname}
		{@render children()}
	{/key}

	<Metadata />
	<ConsoleCredit />

	{#if data.googleAnalyticsId}
		<Analytics id={data.googleAnalyticsId} />
	{/if}
</PreviewMode>
