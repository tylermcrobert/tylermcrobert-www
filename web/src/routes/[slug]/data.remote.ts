import { getRequestEvent, prerender, query } from '$app/server';
import { ROOT_SLUG_QUERY, type ROOT_SLUG_QUERYResult } from '$sanity';

const foo = async () => {
	const client = getRequestEvent().locals.sanity.client;

	return client.fetch<ROOT_SLUG_QUERYResult>(ROOT_SLUG_QUERY, {
		slug: getRequestEvent().params.slug
	});
};

export const prerenderSlugData = prerender(foo);
export const querySlugData = query(foo);
