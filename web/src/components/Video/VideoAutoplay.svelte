<script lang="ts">
	import { onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';
	import type { MediaProjectionVideo } from '$sanity';
	import { getAspect } from '$lib/util';
	import { intersection } from '$lib/attachments';

	type Props = {
		class: ClassValue | undefined;
	} & Pick<MediaProjectionVideo, 'playbackId' | 'aspect'>;

	let { class: className, ...video }: Props = $props();

	let packageLoaded = $state(false);

	onMount(() => {
		import('@mux/mux-video').then(() => {
			packageLoaded = true;
		});
	});
</script>

<mux-video
	style:aspect-ratio={getAspect(video.aspect)}
	class={['block w-full', className]}
	playback-id={video?.playbackId}
	muted
	loop
	playsinline
	autoplay
	style:--media-object-fit="cover"
	{@attach intersection(({ isIntersecting, target }) => {
		let el = target as HTMLVideoElement;

		if (!packageLoaded) {
			return;
		} else if (isIntersecting) {
			el.play();
		} else {
			el.pause();
		}
	})}
>
</mux-video>
