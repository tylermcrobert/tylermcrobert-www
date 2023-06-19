import { client } from '$lib/sanity/client';
import { caseStudyQuery } from '$lib/sanity/queries';
import { formatTitle } from '$lib/util/formatTitle.js';
import { error } from '@sveltejs/kit';

export async function load(ctx) {
  const responses = await client.fetch(caseStudyQuery, {
    slug: ctx.params.slug
  });

  const caseStudySlugs = ctx.locals.index.caseStudies.map((item) => item.slug);
  const csExistsInCtx = caseStudySlugs.includes(ctx.params.slug);

  if (!responses || !responses.length || !csExistsInCtx) {
    throw error(404, { message: 'Not found' });
  }

  return {
    // Show first response (Will be draft if authed)
    caseStudy: responses[0],
    title: formatTitle(responses[0].title),
    isPreview: ctx.locals.isPreview
  };
}
