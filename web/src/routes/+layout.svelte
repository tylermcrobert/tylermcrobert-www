<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';

	import Analytics from '$components/Analytics.svelte';
	import ConsoleCredit from '$components/ConsoleCredit.svelte';
	import Metadata from '$components/Metadata.svelte';
	import Navigation from '$components/Navigation.svelte';
	import PreviewMode from '$components/PreviewMode.svelte';
	import { fetchNowPlaying } from '$lib/nowplaying/nowPlaying';
	import { setNowPlaying } from '$lib/state';

	let { children, data } = $props();

	onMount(() => {
		fetchNowPlaying()
			.then((result) => setNowPlaying(result))
			.catch(() => {
				console.error('Error loading now playing');
			});
	});
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
