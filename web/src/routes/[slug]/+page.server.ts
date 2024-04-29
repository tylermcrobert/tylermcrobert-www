import { client } from '$lib/sanity/client';
import { caseStudyQuery } from '$lib/sanity/queries';
import { formatTitle } from '$lib/util/formatTitle.js';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
  const responses = await client.fetch(caseStudyQuery, {
    slug: params.slug
  });

  const caseStudySlugs = locals.index.caseStudies.map((item) => item.slug);

  const csExistsInCtx = caseStudySlugs.includes(params.slug);
  const noResponse = !responses || !responses.length;
  const is404 = (noResponse || !csExistsInCtx) && !locals.isPreview;

  if (is404) {
    error(404, { message: 'Not found' });
  }

  return {
    // Show first response (Will be draft if authed)
    caseStudy: responses[0],
    title: formatTitle(responses[0].title),
    isPreview: locals.isPreview
  };
}
