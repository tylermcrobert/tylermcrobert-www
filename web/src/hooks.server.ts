import { handlePreviewMode } from '@sanity/sveltekit';
import { type Handle, redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { PREVIEW_COOKIE_SECRET } from '$env/static/private';
import { serverClient } from '$sanity/client.server';

export const PREVIEW_COOKIE_NAME = 'preview_mode_secret';

/*
 * Dynamically enables/disables stega when appropriate
 *  - The user is previewing a draft
 *  - The user is not using Firefox (because it creates a bug with flexbox)
 */
const previewWithStegaLogic: Handle = async ({ event, resolve }) => {
	const previewCookie = event.cookies.get(PREVIEW_COOKIE_NAME);
	const isPreview = previewCookie === PREVIEW_COOKIE_SECRET;

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

/**
 * Preload handler that includes fonts.
 * https://svelte.dev/docs/kit/performance#Optimizing-assets-Fonts
 */
const preload: Handle = async ({ event, resolve }) =>
	resolve(event, {
		preload: ({ type }) => ['js', 'css', 'font'].includes(type)
	});

/**
 * Sequence of hooks to run
 */
export const handle = sequence(previewWithStegaLogic, preload);
