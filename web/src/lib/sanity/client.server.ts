import { client } from './client';
import { SANITY_TOKEN } from '$env/static/private';

if (!SANITY_TOKEN) {
	throw new Error(
		'Missing Sanity token. Please include SANITY_TOKEN to your .env file'
	);
}

export const previewClient = client.withConfig({
	useCdn: false, // must be false for previewDrafts
	perspective: 'previewDrafts',
	token: SANITY_TOKEN
});
