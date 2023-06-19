import { client } from '../lib/sanity/client';

export async function load(ctx) {
  const { index } = ctx.locals;
  const bio = await client.fetch(`*[_type == 'info'][0].bio`);
  return { index, bio };
}

export const prerender = true;
