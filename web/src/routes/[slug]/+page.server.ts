export const prerender = false;

export async function load(ctx) {
  const isPreview = ctx.cookies.get('preview-mode') === 'true';
  return { isPreview };
}
