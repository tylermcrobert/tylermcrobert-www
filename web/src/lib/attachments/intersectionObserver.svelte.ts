import type { Attachment } from 'svelte/attachments';

export type IntersectionCallback = (entry: IntersectionObserverEntry) => void;

export function intersection(
	callback: IntersectionCallback,
	options?: IntersectionObserverInit
): Attachment {
	return (element) => {
		$effect(() => {
			const observer = new IntersectionObserver((entries) => {
				for (const entry of entries) {
					callback(entry);
				}
			}, options);

			observer.observe(element);

			return () => {
				observer.disconnect();
			};
		});
	};
}
