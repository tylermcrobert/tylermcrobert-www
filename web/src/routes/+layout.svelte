<script lang="ts">
	import { Metadata, DraftModePreview, Navigation, Footer } from '$components';
	import '../app.css';

	let { children } = $props();
</script>

<Navigation />

<main class="bg-purple-100">
	{@render children()}
</main>

<Footer />

<Metadata />

<DraftModePreview />
