import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'tjt0kiru',
	dataset: 'production',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2024-04-20'
});
