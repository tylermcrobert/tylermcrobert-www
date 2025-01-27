import { redirect } from '@sveltejs/kit';

export const GET = async ({ cookies, params, locals: { client } }) => {
	const id = await client.fetch(
		'*[_type == "context" && slug.current == $slug][0]._id',
		{ slug: params.slug }
	);

	if (id) {
		cookies.set('context', params.slug, {
			httpOnly: true,
			path: '/'
		});
	}

	redirect(307, '/');
};
