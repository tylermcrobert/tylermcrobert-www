<script lang="ts">
	import {
		Metadata,
		DraftModeOverlay,
		Navigation,
		Footer,
		ConsoleCredit,
		Analytics
	} from '$components';
	import '../style/app.css';

	let { children, data } = $props();
</script>

<Navigation />

{#key data.pathname}
	<main class="bg-purple-100">
		{@render children()}
	</main>
{/key}

<Footer />

<Metadata />
<DraftModeOverlay />
<ConsoleCredit />

{#if data.googleAnalyticsId}
	<Analytics id={data.googleAnalyticsId} />
{/if}
