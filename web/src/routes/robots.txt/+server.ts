import { text } from '@sveltejs/kit';

import { ENVIRONMENT } from '$env/static/private';

/**
 * Robots.txt
 * Disallow pages based on session
 * & dynamic search
 */
export const GET = async ({ url }) => {
	const robots = `
User-agent: * 
${
	ENVIRONMENT === 'PREVIEW'
		? 'Disallow: /'
		: `
Allow: /
Disallow: /track/*
Sitemap: ${new URL('/sitemap.xml', url)}`
}
`.trim();

	return text(robots);
};
