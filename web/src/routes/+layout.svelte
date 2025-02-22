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
<Analytics id="G-S98MMVCHW0" />
