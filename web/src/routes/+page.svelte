<script lang="ts">
	import { Modules } from '$components';
	import { intersect } from '$lib/actions.svelte';
	let { data } = $props();
	let intersecting = $state(false);
</script>

<Modules modules={data.modules} />

<div
	use:intersect={{
		callback: (e) => {
			console.log(e.isIntersecting);
		},
		options: { rootMargin: '0px 0px 0px 0px' }
	}}
>
	Item
</div>
