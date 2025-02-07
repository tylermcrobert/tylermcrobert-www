import { SITEMAP_QUERY, type SITEMAP_QUERYResult } from '$lib/sanity';
import { PUBLIC_SITE_URL } from '$env/static/public';

export async function GET({ locals }) {
	const sanityData =
		await locals.client.fetch<SITEMAP_QUERYResult>(SITEMAP_QUERY);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


    ${(sanityData.pages || [])
			.map(
				(page) => `
        <url>
          <loc>${PUBLIC_SITE_URL}/${page.slug}</loc>
          <lastmod>${page._updatedAt}</lastmod>
          <priority>0.8</priority>
        </url>`
			)
			.join('')}
                
    ${
			sanityData.info
				? `<url>
        <loc>${PUBLIC_SITE_URL}/info</loc>
        <lastmod>${sanityData.info?._updatedAt}</lastmod>
        <priority>0.8</priority>
      </url>
    `
				: ''
		}
    </urlset>
  `;

	const response = new Response(body);

	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');

	return response;
}
