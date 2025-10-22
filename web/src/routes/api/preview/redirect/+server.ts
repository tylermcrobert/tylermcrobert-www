import { resolveLink } from '$sanity';
import { PREVIEW_COOKIE_SECRET } from '$env/static/private';
import { PREVIEW_COOKIE_NAME } from '../../../../hooks.server';
import { redirect } from '@sveltejs/kit';

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
