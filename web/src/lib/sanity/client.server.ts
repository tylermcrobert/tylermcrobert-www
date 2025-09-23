import { client } from './client';
import { SANITY_API_READ_TOKEN } from '$env/static/private';
import { PUBLIC_SANITY_STUDIO_URL } from '$env/static/public';

if (!SANITY_API_READ_TOKEN) {
	throw new Error(
		'Missing Sanity token. Please include SANITY_TOKEN to your .env file'
	);
}

export const previewClient = client.withConfig({
	useCdn: false,
	perspective: 'drafts',
	token: SANITY_API_READ_TOKEN,
	stega: {
		enabled: false,
		studioUrl: PUBLIC_SANITY_STUDIO_URL
	}
});
