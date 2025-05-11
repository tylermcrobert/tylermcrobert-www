// REFERENCE https://github.com/CaptainCodeman/svelte-intersection-observer-action/tree/master/src

import { onMount } from 'svelte';

type IntersectionCallback = (entry: IntersectionObserverEntry) => void;
type IntersectionOptions = {
	callback: IntersectionCallback;
	options?: IntersectionObserverInit;
};

// Keep track of which callback is associated with each element
const intersectionCallbacks = new WeakMap<Element, IntersectionCallback>();

// Use a single intersection observer instance per options
const intersectionObservers = new WeakMap<
	IntersectionObserverInit,
	IntersectionObserver
>();

function createObserver(init: IntersectionObserverInit | undefined) {
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const callback = intersectionCallbacks.get(entry.target);
			if (callback) {
				callback(entry);
			}
		}
	}, init);
	if (init) {
		intersectionObservers.set(init, observer);
	}
	return observer;
}

function observe(
	target: Element,
	props: IntersectionCallback | IntersectionOptions
) {
	const callback = typeof props === 'function' ? props : props.callback;
	const options = typeof props === 'object' ? props.options : undefined;

	const observer = options
		? intersectionObservers.get(options) || createObserver(options)
		: createObserver(undefined);

	intersectionCallbacks.set(target, callback);
	observer.observe(target);

	return () => {
		observer.unobserve(target);
		intersectionCallbacks.delete(target);
	};
}

export function intersect(
	target: Element,
	props: IntersectionCallback | IntersectionOptions
): void {
	const unobserve = observe(target, props);

	onMount(() => {
		return () => unobserve();
	});
}
