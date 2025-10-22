import { SANITY_WRITE_TOKEN } from '$env/static/private';
import { client } from './client';

export const serverClient = client.withConfig({
	token: SANITY_WRITE_TOKEN
});
