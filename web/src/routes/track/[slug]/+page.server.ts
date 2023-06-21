import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export type TrackType = {
  date: string;
  title: string;
  file: string;
};

const trackQuery = `
  *[_type == 'song' && slug.current == $slug][0]{
    "date": _createdAt,
    title,
    "file": file.asset->url
  }
`;

export const load = (async (ctx) => {
  const track = await client.fetch(trackQuery, { slug: ctx.params.slug });
  return track;
}) satisfies PageServerLoad;
