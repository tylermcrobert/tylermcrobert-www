import { client } from '$lib/sanity/client';
import { caseStudyQuery } from '$lib/sanity/queries';

export async function load(ctx) {
  const data = await client.fetch(caseStudyQuery, { slug: ctx.params.slug });
  return data;
}
