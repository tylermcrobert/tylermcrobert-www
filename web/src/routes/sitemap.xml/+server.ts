import { SITEMAP_QUERY } from '$sanity';

export async function GET({
	url,
	locals: {
		sanity: { client }
	}
}) {
	const { pages, projects, info } = await client.fetch(SITEMAP_QUERY);

	const idk = [...pages, ...(projects || [])].filter(
		(page): page is { slug: string; _updatedAt: string } => page.slug !== null
	);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">


    ${idk
			.map(
				(project) => `
        <url>
          <loc>${new URL(project.slug, url)}</loc>
          <lastmod>${project._updatedAt}</lastmod>
          <priority>0.8</priority>
        </url>`
			)
			.join('')}
                
    ${
			info
				? `<url>
        <loc>${new URL('info', url)}</loc>
        <lastmod>${info?._updatedAt}</lastmod>
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
