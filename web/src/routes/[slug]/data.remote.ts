import * as v from 'valibot';

import { getRequestEvent, prerender, query } from '$app/server';
import { ROOT_SLUG_QUERY, type ROOT_SLUG_QUERYResult } from '$sanity';

const getPage = async (slug: string) => {
	const client = getRequestEvent().locals.sanity.client;
	return client.fetch<ROOT_SLUG_QUERYResult>(ROOT_SLUG_QUERY, {
		slug
	});
};

export const prerenderSlugData = prerender(v.string(), getPage);
export const querySlugData = query(v.string(), getPage);
