import { client } from '../lib/sanity/client';

const layoutQuery = `*[_type == 'info'][0]{ bio, previewImage }`;

export async function load(ctx) {
  const { index } = ctx.locals;
  const { bio, previewImage } = await client.fetch(layoutQuery);

  return { index, previewImage, bio };
}
