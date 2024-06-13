import { ARENA_PERSONAL_ACCESS_TOKEN } from '$env/static/private';
import type ArenaType from 'are.na';

export const load = async ({ params: { slug } }) => {
  const response = await fetch(
    `https://api.are.na/v2/channels/${slug}/contents/?direction=desc&per=1000`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ARENA_PERSONAL_ACCESS_TOKEN}`
      }
    }
  );

  const moodboard = (await response.json()) as ArenaType.Channel;

  return { moodboard };
};
