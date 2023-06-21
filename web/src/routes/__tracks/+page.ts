import { client } from '$lib/sanity/client';
import type { PageLoad } from './$types';

export type TrackLink = {
  slug: string;
  title: string;
  date: string;
};

export const load = (async () => {
  const tracks = await client.fetch(`
    *[_type == 'song'] | order(_createdAt desc) {
      "slug": slug.current,
      title,
      "date": _createdAt
    }
  `);
  return { tracks };
}) satisfies PageLoad;
