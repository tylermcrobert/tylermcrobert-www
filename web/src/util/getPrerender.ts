import { ENVIRONMENT } from '$env/static/private';

export const getPrerender = () =>
	ENVIRONMENT === 'PRODUCTION' ? 'auto' : false;
