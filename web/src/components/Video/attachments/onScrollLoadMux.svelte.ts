import type { Attachment } from 'svelte/attachments';

import { intersection } from '$lib/attachments';

export function intersectionLoadMux(
	onmuxload: () => void
): Attachment<HTMLVideoElement> {
	let thresholdCrossed = $state(false);

	return (element) => {
		intersection((e) => e.isIntersecting && (thresholdCrossed = true), {
			rootMargin: '0px 0px 50% 0px'
		})(element);

		$effect(() => {
			if (thresholdCrossed) {
				import('@mux/mux-video').then(() => {
					onmuxload();
				});
			}
		});
	};
}
