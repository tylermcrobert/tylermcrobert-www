<script lang="ts">
	import { Modules } from '$components';
	import { intersect } from '$lib/actions.svelte';
	let { data } = $props();
	let intersecting = $state(false);
</script>

<Modules modules={data.modules} />
{intersecting}
<!-- <div
	use:intersect={{
		callback: () => {},
		options: { rootMargin: '0px 0px -50% 0px' }
	}}
>
	asdf
</div> -->
<div
	use:intersect={(e) => {
		intersecting = e.isIntersecting;
		console.log(e);
	}}
></div>
