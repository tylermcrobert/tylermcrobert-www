import { indexQuery } from '$lib/sanity/queries';
import { client } from '../lib/sanity/client';

export async function load() {
  const index = await client.fetch(indexQuery);
  const bio = await client.fetch(`*[_type == 'info'][0].bio`);
  return { ...index, bio };
}

export const prerender = true;
