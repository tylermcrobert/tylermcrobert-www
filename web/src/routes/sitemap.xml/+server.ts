import { SITEMAP_QUERY, type SITEMAP_QUERYResult } from '$sanity';
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


    ${(sanityData.projects || [])
			.map(
				(project) => `
        <url>
          <loc>${PUBLIC_SITE_URL}/${project.slug}</loc>
          <lastmod>${project._updatedAt}</lastmod>
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
