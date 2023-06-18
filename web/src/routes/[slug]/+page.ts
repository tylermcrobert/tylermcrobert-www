import { client } from '$lib/sanity/client';
import { caseStudyQuery } from '$lib/sanity/queries';

export async function load(ctx) {
  // TODO: Catch 404s
  const responses = await client.fetch(caseStudyQuery, {
    slug: ctx.params.slug
  });

  return {
    ...ctx.data,
    // Add draft if authenticated
    caseStudy: responses[0]
  };
}
