import type { Attachment } from 'svelte/attachments';

import { intersection } from '$lib/attachments';

export function lazyLoad({
	src,
	isMux,
	eager,
	onload
}: {
	src: string;
	isMux: boolean;
	eager: boolean;
	onload: () => void;
}): Attachment<HTMLVideoElement> {
	let thresholdCrossed = $state(false);

	return (element) => {
		intersection((e) => e.isIntersecting && (thresholdCrossed = true), {
			rootMargin: '0px 0px 50% 0px'
		})(element);

		$effect(() => {
			if (!thresholdCrossed && !eager) return;

			if (isMux) {
				import('@videojs/html/media/mux-video').then(() => onload());
			} else {
				element.src = src;
				onload();
			}
		});
	};
}
