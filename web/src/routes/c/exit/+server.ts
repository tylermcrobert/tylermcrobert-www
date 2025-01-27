import { redirect } from '@sveltejs/kit';

export const GET = async ({ cookies }) => {
	cookies.delete('context', {
		path: '/'
	});

	redirect(307, '/');
};
