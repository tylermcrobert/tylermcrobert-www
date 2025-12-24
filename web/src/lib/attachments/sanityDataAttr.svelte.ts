import { createDataAttribute } from '@sanity/sveltekit';
import type { Attachment } from 'svelte/attachments';

import { page } from '$app/state';
import { getModuleContext } from '$lib/context/moduleContext';

export const sanityDataAttribute = (
	path: string | undefined = ''
): Attachment<HTMLElement> => {
	if (!page.data.previewEnabled) return () => {};

	const moduleContext = getModuleContext();

	return (el) => {
		/** Attach the data attribute to the element */
		el.dataset.sanity = createDataAttribute({
			id: moduleContext.documentId,
			type: moduleContext.documentType,
			path: moduleContext.path
		})(path);
	};
};
