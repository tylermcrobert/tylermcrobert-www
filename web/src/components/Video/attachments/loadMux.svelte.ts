import type { Attachment } from 'svelte/attachments';

import { intersection } from '$lib/attachments';

export function loadMux({
	eager,
	onmuxload
}: {
	eager: boolean;
	onmuxload: () => void;
}): Attachment<HTMLVideoElement> {
	let thresholdCrossed = $state(false);

	return (element) => {
		intersection((e) => e.isIntersecting && (thresholdCrossed = true), {
			rootMargin: '0px 0px 50% 0px'
		})(element);

		$effect(() => {
			if (thresholdCrossed || eager) {
				import('@videojs/html/media/mux-video').then(() => {
					onmuxload();
				});
			}
		});
	};
}
