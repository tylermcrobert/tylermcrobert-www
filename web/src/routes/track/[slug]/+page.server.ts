import type { PageServerLoad } from './$types';
import { getAudioDurationInSeconds } from 'get-audio-duration';
import { formatTime } from '$lib/util/msToTime';

const MP3 =
  'https://cdn.sanity.io/files/n1wxk3oc/production/a22773b70b09933742e5a2bc52b01c3409c97ac8.mp3';

export const load = (async () => {
  const seconds = await getAudioDurationInSeconds(MP3);
  const duration = formatTime(seconds * 1000, 'mm:ss');

  return { duration };
}) satisfies PageServerLoad;
