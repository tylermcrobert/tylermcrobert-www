import { client } from '$lib/sanity/client';
import { indexQuery, type IndexQuery } from '$lib/sanity/queries';

export const handle = async ({ event, resolve }) => {
  const ctxSlug = event.cookies.get('context');
  const isPreview = event.cookies.get('preview-mode') === 'true';

  const params = { slug: ctxSlug || 'default' };
  const index: IndexQuery = await client.fetch(indexQuery, params);

  event.locals.index = index;
  event.locals.isPreview = isPreview;

  const response = await resolve(event);
  return response;
};
