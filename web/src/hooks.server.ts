import { client } from '$sanity';
import { previewClient } from '$sanity/client.server';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const draftToken = event.cookies.get('draftMode');
	const isDraftMode = draftToken === 'true';

	event.locals.isDraftMode = isDraftMode;
	event.locals.client = isDraftMode ? previewClient : client;

	const response = await resolve(event);
	return response;
};
