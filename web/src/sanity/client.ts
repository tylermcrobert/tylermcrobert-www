import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: '4cwcet86',
	dataset: 'production',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2024-04-20'
});
