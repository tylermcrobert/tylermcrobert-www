import { homeQuery } from '$lib/sanity/queries.js';
import { client } from '../lib/sanity/client.js';

export async function load() {
	const data = await client.fetch(homeQuery);
	return data;
}
