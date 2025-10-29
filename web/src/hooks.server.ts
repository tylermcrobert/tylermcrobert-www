import { handlePreviewMode } from '@sanity/sveltekit';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { PREVIEW_COOKIE_SECRET } from '$env/static/private';
import { serverClient } from '$sanity/client.server';

export const PREVIEW_COOKIE_NAME = 'preview_mode_secret';

/**
 * Determins if stega should be enabled.
 * By default it should not ship to the browser unless:
 *  - The user is previewing a draft
 *  - The user is not using Firefox (because it creates a bug with flexbox)
 * @returns boolean
 */
function getStegaEnabledState(event: RequestEvent) {
	const isPreview =
		event.cookies.get(PREVIEW_COOKIE_NAME) === PREVIEW_COOKIE_SECRET;
	const isFirefox = event.request.headers
		.get('user-agent')
		?.toLowerCase()
		.includes('firefox');

	return isPreview && !isFirefox;
}

export const handle = (ctx) =>
	sequence(
		handlePreviewMode({
			client: serverClient.withConfig({
				stega: { enabled: getStegaEnabledState(ctx.event) }
			}),
			preview: {
				redirect,
				cookie: PREVIEW_COOKIE_NAME,
				secret: PREVIEW_COOKIE_SECRET
			}
		})
	)(ctx);
