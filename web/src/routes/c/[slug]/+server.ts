import { client } from '$lib/sanity/client';
import { indexQuery } from '$lib/sanity/queries';
import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, params }) => {
  const index = await client.fetch(indexQuery, { slug: params.slug });
  if (!index) throw redirect(302, '/404');

  cookies.set('context', params.slug, { path: '/' });
  throw redirect(302, '/');
};
