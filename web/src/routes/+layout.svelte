<script lang="ts">
	import {
		Metadata,
		DraftModeOverlay,
		Navigation,
		ConsoleCredit
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

<Metadata />
<DraftModeOverlay />
<ConsoleCredit />
