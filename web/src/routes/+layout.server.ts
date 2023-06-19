import { indexQuery } from '$lib/sanity/queries';
import { client } from '../lib/sanity/client';

export async function load(ctx) {
  const ctxSlug = ctx.cookies.get('context');

  const index = await client.fetch(indexQuery, { slug: ctxSlug || 'default' });
  const bio = await client.fetch(`*[_type == 'info'][0].bio`);

  return { ...index, bio };
}

export const prerender = true;
