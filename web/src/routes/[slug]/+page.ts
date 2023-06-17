import { client } from '$lib/sanity/client';
import { caseStudyQuery } from '$lib/sanity/queries';

export async function load(ctx) {
  const responses = await client.fetch(caseStudyQuery, {
    slug: ctx.params.slug
  });

  // Add draft if authenticated
  return responses[0];
}
