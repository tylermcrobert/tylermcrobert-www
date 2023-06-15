import { infoQuery } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';

export async function load() {
  const info = await client.fetch(infoQuery);
  return info;
}

export const prerender = true;
