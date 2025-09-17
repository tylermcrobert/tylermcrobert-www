import type { Attachment } from 'svelte/attachments';
import { observe } from './intersectionObserver.svelte';

export function playOnIntersect(enabled: boolean): Attachment {
	return (element) => {
		$effect(() => {
			const observer = observe(element, {
				callback: (e) => {
					const el = e.target as HTMLVideoElement;

					if (!enabled) {
						return;
					} else if (e.isIntersecting) {
						el.play();
					} else {
						el.pause();
					}
				}
			});

			return () => {
				observer.unobserve();
			};
		});
	};
}
