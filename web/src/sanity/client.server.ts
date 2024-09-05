import { client } from './client';
import { SANITY_TOKEN } from '$env/static/private';

export const previewClient = client.withConfig({
	useCdn: false, // must be false for previewDrafts
	perspective: 'previewDrafts',
	token: SANITY_TOKEN
});
