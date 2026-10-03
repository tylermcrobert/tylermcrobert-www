<script lang="ts">
	import '../app.css';

	import Analytics from '$components/Analytics.svelte';
	import ConsoleCredit from '$components/ConsoleCredit.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Navigation from '$components/Navigation.svelte';
	import NowPlayingContext from '$components/NowPlayingContext.svelte';
	import PreviewMode from '$components/PreviewMode.svelte';

	let { children, data } = $props();
</script>

<PreviewMode enabled={data.previewEnabled}>
	<Navigation />

	<NowPlayingContext>
		{#key data.pathname}
			{@render children()}
		{/key}
	</NowPlayingContext>

	<Metadata />

	{#if data.googleAnalyticsId}
		<Analytics id={data.googleAnalyticsId} />
	{/if}
</PreviewMode>

<ConsoleCredit />
