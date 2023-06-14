import { client } from '$lib/sanity/client';
import { caseStudyQuery } from '$lib/sanity/queries';

export async function load({ params }) {
  const data = await client.fetch(caseStudyQuery, { slug: params.slug });
  return data;
}
