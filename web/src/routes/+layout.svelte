<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';

	import {
		Analytics,
		ConsoleCredit,
		Metadata,
		Navigation,
		PreviewMode
	} from '$components';
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
