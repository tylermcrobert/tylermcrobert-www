import type { Attachment } from 'svelte/attachments';

import { intersection } from '$lib/attachments';

export function handleVideoPlayback({
	autoPlay,
	autoPause
}: {
	autoPlay: boolean;
	autoPause: boolean;
}): Attachment<HTMLVideoElement> {
	let canplay = $state(false);
	let muxVideoPackageLoaded = $state(false);
	let inViewPlayback = $state(false);
	let inViewLazyLoad = $state(false);

	return (element) => {
		$effect(() => {
			if (!canplay || !muxVideoPackageLoaded) {
				return undefined;
			} else if (autoPlay && inViewPlayback) {
				element.play();
			} else if (autoPause) {
				element.pause();
			}
		});

		intersection((e) => (inViewPlayback = e.isIntersecting))(element);
		intersection((e) => (inViewLazyLoad ||= e.isIntersecting), {
			rootMargin: '0px 0px 50% 0px'
		})(element);

		$effect(() => {
			const handler = () => (canplay = true);
			element.addEventListener('canplay', handler);
			return () => element.removeEventListener('canplay', handler);
		});

		$effect(() => {
			if (inViewLazyLoad && !muxVideoPackageLoaded) {
				import('@mux/mux-video').then(() => (muxVideoPackageLoaded = true));
			}
		});
	};
}
