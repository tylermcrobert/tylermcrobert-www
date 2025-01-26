import { redirect } from '@sveltejs/kit';

export const GET = async ({ cookies }) => {
	cookies.delete('draftMode', {
		path: '/'
	});

	redirect(307, '/');
};
