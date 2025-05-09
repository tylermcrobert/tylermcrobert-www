<script lang="ts">
	import { Modules } from '$components';
	import { intersect } from '$lib/actions.svelte';
	let { data } = $props();
	let intersecting = $state(false);
</script>

<Modules modules={data.modules} />
