import { client } from '$lib/sanity/client.js';
import { caseStudyQuery } from '$lib/sanity/queries.js';

export async function load({ params }) {
  const data = await client.fetch(caseStudyQuery, { slug: params.slug });
  return data;
}
