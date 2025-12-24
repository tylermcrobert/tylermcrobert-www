import { createDataAttribute } from '@sanity/sveltekit';
import type { Attachment } from 'svelte/attachments';

import { page } from '$app/state';
import {
	getModuleContext,
	type ModuleContext
} from '$lib/context/moduleContext';

export const sanityDataAttribute = (
	path: string | undefined = '',
	contextOverride: Partial<ModuleContext> | void = {}
): Attachment<HTMLElement> => {
	if (!page.data.previewEnabled) return () => {};

	const moduleContext = getModuleContext();

	return (el) => {
		el.dataset.sanity = createDataAttribute({
			id: moduleContext.documentId,
			type: moduleContext.documentType,
			path: moduleContext.path,
			...contextOverride
		})(path);
	};
};
