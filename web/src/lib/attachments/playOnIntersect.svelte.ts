import type { Attachment } from 'svelte/attachments';

import { intersection } from './intersectionObserver.svelte';

export function playOnIntersect({
	autoPlay,
	autoPause,
	ready
}: {
	autoPlay: boolean;
	autoPause: boolean;
	ready: boolean;
}): Attachment<HTMLVideoElement> {
	return (element) => {
		return intersection((e) => {
			if (autoPlay && ready && e.isIntersecting) {
				element.play();
			} else if (autoPause && ready) {
				element.pause();
			}
		})(element);
	};
}
