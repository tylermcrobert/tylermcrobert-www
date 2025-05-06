<script lang="ts">
	import type { MediaProjection, MediaProjectionVideo } from '$sanity';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type FormSnippet = {
		aspect: number;
	};

	type Props = {
		video: MediaProjectionVideo;
		class: ClassValue | undefined;
		children: Snippet<[FormSnippet]>;
	};

	let { video, class: className, children }: Props = $props();

	/* Get aspect number mux string */
	let aspect = $derived(
		video.aspect
			?.split(':')
			.map(Number)
			.reduce((a, b) => a / b)
	);
</script>

<div
	style:aspect-ratio={aspect}
	class={`relative overflow-hidden bg-neutral-100 ${className}`.trim()}
>
	{@render children({ aspect })}
</div>
