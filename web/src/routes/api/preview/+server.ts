import type { RequestHandler } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url, cookies }) => {
  const allParams = url.searchParams;
  const type = allParams.get('type');
  const slug = allParams.get('slug');

  if (!slug || !type) {
    throw error(401, 'Missing slug or type');
  }

  if (type === 'caseStudy') {
    const url = `/${slug}`;

    cookies.set('preview-mode', 'true', {
      path: '/'
    });

    throw redirect(302, url);
  }

  throw redirect(302, '/404');
};
