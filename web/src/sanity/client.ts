import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2024-04-20'
});
