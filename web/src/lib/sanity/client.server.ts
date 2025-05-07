import { client } from './client';
import { SANITY_API_READ_TOKEN } from '$env/static/private';

if (!SANITY_API_READ_TOKEN) {
	throw new Error(
		'Missing Sanity token. Please include SANITY_TOKEN to your .env file'
	);
}

export const previewClient = client.withConfig({
	useCdn: false,
	perspective: 'drafts',
	token: SANITY_API_READ_TOKEN
});
