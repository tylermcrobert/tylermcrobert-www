/* eslint-disable @typescript-eslint/no-explicit-any */
import { infoQuery } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import { getPlaylistById } from '$lib/spotify/spotify';

export async function load() {
  const info = await client.fetch(infoQuery);

  const links: string[] = info.playlists.map((item: any) => item.link);
  const playlists = await Promise.all(
    links.map((item) => getPlaylistById(item))
  );

  return { playlists };
}

export const prerender = true;
