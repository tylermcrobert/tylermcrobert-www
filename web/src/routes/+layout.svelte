<script lang="ts">
	import { Metadata, DraftModeOverlay, Navigation, Footer } from '$components';
	import '../app.css';

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
