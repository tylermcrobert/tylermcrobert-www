import { redirect } from '@sveltejs/kit';

import { PREVIEW_COOKIE_SECRET } from '$env/static/private';
import { resolveLink } from '$sanity';

import { PREVIEW_COOKIE_NAME } from '../../../../hooks.server';

export const GET = async ({ cookies, url }) => {
	const slug = url.searchParams.get('slug');
	const type = url.searchParams.get('type');

	cookies.set(PREVIEW_COOKIE_NAME, PREVIEW_COOKIE_SECRET, {
		httpOnly: true,
		path: '/'
	});

	const redirectTo = resolveLink({ slug, type });

	redirect(307, redirectTo || '/');
};
