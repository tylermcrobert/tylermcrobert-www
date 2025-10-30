import { ENVIRONMENT } from '$env/static/private';

export const getPrerender = () => (ENVIRONMENT === 'STATIC' ? 'auto' : false);
