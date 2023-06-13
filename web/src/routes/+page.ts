import { infoQuery } from '$lib/sanity/queries.js';
import { client } from '../lib/sanity/client.js';

export async function load() {
	const idk = await client.fetch(infoQuery);

	console.log(idk);

	return { foo: 'bar' };
}
