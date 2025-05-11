import { redirect } from '@sveltejs/kit';

export const GET = async ({
	cookies,
	params,
	locals: {
		sanity: { client }
	}
}) => {
	const context = await client.fetch(
		'*[_type == "context" && slug.current == $slug][0]._id',
		{ slug: params.slug }
	);

	if (context) {
		cookies.set('context', params.slug, {
			httpOnly: true,
			path: '/'
		});

		redirect(307, '/');
	}

	redirect(307, '/');
};
