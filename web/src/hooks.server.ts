import { previewClient } from '$sanity/client.server';
import { handlePreviewMode } from '@sanity/sveltekit';

export const handle = handlePreviewMode({
	client: previewClient,
	preview: {
		cookie: 'draftMode',
		secret: 'true'
	}
});
