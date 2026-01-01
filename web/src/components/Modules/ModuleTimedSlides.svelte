<script lang="ts">
	import { onMount } from 'svelte';

	import Image from '$components/Image.svelte';
	import type { ModuleTimedSlides } from '$sanity';

	type Props = {
		data: ModuleTimedSlides;
	};

	let { data }: Props = $props();

	let index = $state(0);
	let intervalId = $state<number | undefined>(undefined);

	function nextSlide() {
		index = (index + 1) % (data.images?.length || 0);
	}

	onMount(() => {
		const interval = (data.seconds || 0.5) * 1000;
		intervalId = window.setInterval(nextSlide, interval);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="wrapper">
	<div
		class={['my-standard grid p-[10%]', { 'bg-black': !data.background }]}
		style:background={data.background}
	>
		{#each data.images || [] as image, i}
			<div class:opacity-0={i !== index} class="col-start-1 row-start-1">
				<Image {image} sizes="90vw" alt={null} />
			</div>
		{/each}
	</div>
</div>
