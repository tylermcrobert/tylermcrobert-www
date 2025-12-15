import type { Attachment } from 'svelte/attachments';

import { intersection } from '$lib/attachments';

export function intersectionHandlePlayback({
	autoPlay,
	autoPause
}: {
	autoPlay: boolean;
	autoPause: boolean;
}): Attachment<HTMLVideoElement> {
	let canplay = $state(false);
	let isInView = $state(false);

	return (element) => {
		/** Handle the video playback and autoplay/autopause */
		$effect(() => {
			if (!canplay) {
				return undefined;
			} else if (autoPlay && isInView) {
				element.play();
			} else if (autoPause) {
				element.pause();
			}
		});

		/** Set canplay state to true when the video can play */
		$effect(() => {
			const setCanplayTrue = () => (canplay = true);

			if (element.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
				setCanplayTrue();
			} else {
				element.addEventListener('canplay', setCanplayTrue);
			}

			return () => element.removeEventListener('canplay', setCanplayTrue);
		});

		/** Check if the video is in view */
		intersection((e) => (isInView = e.isIntersecting))(element);
	};
}
