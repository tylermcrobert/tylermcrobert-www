import { handlePreviewMode } from '@sanity/sveltekit';
import { type Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { PREVIEW_COOKIE_SECRET } from '$env/static/private';
import { serverClient } from '$sanity/client.server';

export const PREVIEW_COOKIE_NAME = 'preview_mode_secret';

const previewWithStegaLogic: Handle = async ({ event, resolve }) => {
	const previewCookie = event.cookies.get(PREVIEW_COOKIE_NAME);
	const isPreview = previewCookie === PREVIEW_COOKIE_SECRET;

	// Firefox has layout issues with stega
	const notFirefox = !event.request.headers
		.get('user-agent')
		?.toLowerCase()
		.includes('firefox');

	return handlePreviewMode({
		client: serverClient.withConfig({
			stega: { enabled: isPreview && notFirefox }
		}),
		preview: {
			redirect,
			cookie: PREVIEW_COOKIE_NAME,
			secret: PREVIEW_COOKIE_SECRET
		}
	})({ event, resolve });
};

export const handle = sequence(previewWithStegaLogic);
