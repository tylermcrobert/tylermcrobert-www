import type { PageServerLoad } from './$types';

const MP3 =
  'https://cdn.sanity.io/files/n1wxk3oc/production/a22773b70b09933742e5a2bc52b01c3409c97ac8.mp3';

export const load = (async () => {
  return { link: MP3 };
}) satisfies PageServerLoad;
