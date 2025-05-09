import { onMount } from 'svelte';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;
type IntersectionOptions = {
	callback: IntersectionCallback;
	options?: IntersectionObserverInit;
};

export function intersect(
	target: Element,
	props: IntersectionCallback | IntersectionOptions
): void {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (typeof props === 'function') {
				props(entry);
			} else {
				props.callback(entry);
			}
		},
		typeof props === 'object' ? props.options : undefined
	);

	onMount(() => {
		observer.observe(target);
		return () => observer.unobserve(target);
	});
}
