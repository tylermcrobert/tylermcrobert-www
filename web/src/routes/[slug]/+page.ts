import { client } from '$lib/sanity/client';
import { caseStudyQuery } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';

export async function load(ctx) {
  // TODO: Catch 404s
  const responses = await client.fetch(caseStudyQuery, {
    slug: ctx.params.slug
  });

  if (!responses || !responses.length) {
    throw error(404, {
      message: 'Not found'
    });
  }
  return {
    ...ctx.data,
    // Add draft if authenticated
    caseStudy: responses[0]
  };
}
