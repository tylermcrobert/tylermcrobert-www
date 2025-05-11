<script lang="ts">
	import {
		Metadata,
		DraftModeOverlay,
		Navigation,
		ConsoleCredit,
		Analytics
	} from '$components';
	import '../style/app.css';

	let { children, data } = $props();
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
