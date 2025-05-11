<script lang="ts">
	import {
		Metadata,
		DraftModeOverlay,
		Navigation,
		ConsoleCredit,
		Analytics
	} from '$components';
	import { onMount } from 'svelte';
	import '../style/app.css';
	import { fetchNowPlaying } from '$lib/last.fm';
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

<Navigation />

{#key data.pathname}
	{@render children()}
{/key}

<Metadata />
<DraftModeOverlay />
<ConsoleCredit />

{#if data.googleAnalyticsId}
	<Analytics id={data.googleAnalyticsId} />
{/if}
