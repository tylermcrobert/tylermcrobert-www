import { createDataAttribute } from '@sanity/sveltekit';
import type { Attachment } from 'svelte/attachments';

import { page } from '$app/state';
import { getModuleContext } from '$lib/context/moduleContext';

/**
 * Attaches a Visual Editing `data-sanity` attribute using the current module context.
 * No-ops when preview is disabled.
 *
 * @param path - Relative field path appended to the module path.
 *   Empty string targets the module; pass a nested path for child fields.
 *
 * @example
 * ```svelte
 * <div {@attach sanityDataAttribute(`.items[_key=="${item._key}"]`)}>
 * ```
 */
export const sanityDataAttribute = (
	path: string | undefined = ''
): Attachment<HTMLElement> => {
	if (!page.data.previewEnabled) return () => {};

	const moduleContext = getModuleContext();

	return (el) => {
		el.dataset.sanity = createDataAttribute({
			id: moduleContext.documentId,
			type: moduleContext.documentType,
			path: moduleContext.path
		})(path);
	};
};
