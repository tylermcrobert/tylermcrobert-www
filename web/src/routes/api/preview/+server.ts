import type { RequestHandler } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url, cookies }) => {
  const allParams = url.searchParams;
  const type = allParams.get('type');
  const slug = allParams.get('slug');

  cookies.set('preview-mode', 'true', { path: '/' });

  if (type === 'caseStudy') {
    const url = `/${slug}`;
    throw redirect(302, url);
  }

  throw redirect(302, '/');
};
