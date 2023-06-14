import { homeQuery } from '$lib/sanity/queries';
import { client } from '../lib/sanity/client';

export async function load() {
  const data = await client.fetch(homeQuery);
  return data;
}
