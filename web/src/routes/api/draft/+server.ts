import { resolveLink } from '$lib/sanity';
import { redirect } from '@sveltejs/kit';

export const GET = async ({ cookies, url }) => {
	const slug = url.searchParams.get('slug');
	const type = url.searchParams.get('type');

	cookies.set('draftMode', 'true', {
		httpOnly: true,
		path: '/'
	});

	const redirectTo = resolveLink({ slug, type });

	redirect(307, redirectTo || '/');
};
