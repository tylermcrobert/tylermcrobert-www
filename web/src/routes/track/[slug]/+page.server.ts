import { createClient } from '@sanity/client';
import type { PageServerLoad } from './$types';
import groq from 'groq';
import { SNIPPETS_TOKEN } from '$env/static/private';
import { error } from '@sveltejs/kit';

const snippetsClient = createClient({
  projectId: '4uxl8u8u',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-20',
  token: SNIPPETS_TOKEN
});

const trackQuery = groq`
  *[_type == 'track' && slug.current == $slug][0]{
    title,
    date,
    duration,
    "file": file.asset->url
  }
`;

export type TrackQuery = {
  title: string | null;
  date: string | null;
  duration: string | null;
  file: string | null;
};

export const load = (async (ctx) => {
  const track: TrackQuery = await snippetsClient.fetch(trackQuery, {
    slug: ctx.params.slug
  });

  if (!track) {
    throw error(404, 'not found');
  }

  return track;
}) satisfies PageServerLoad;
