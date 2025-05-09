import { onMount } from 'svelte';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;
type IntersectionOptions = {
	callback: IntersectionCallback;
	options?: IntersectionObserverInit;
};

export function intersect(
	target: Element,
	options: IntersectionCallback | IntersectionOptions
): void {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (typeof options === 'function') {
				options(entry);
			} else {
				options.callback(entry);
			}
		},
		typeof options === 'object' ? options.options : undefined
	);

	onMount(() => {
		observer.observe(target);
		return () => observer.unobserve(target);
	});
}
