import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request, url, cookies }) => {
  cookies.delete('preview-mode', { path: '/' });
  const referer = request.headers.get('referer');
  redirect(302, referer || url.origin || '/');
};
