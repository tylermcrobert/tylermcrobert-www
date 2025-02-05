import { error } from '@sveltejs/kit';

type SnippetsAPIResponse = {
	track: {
		title: string;
		primaryVersion: {
			date: string;
			duration: number;
			assetUrl: string;
		};
	};
};

export const load = async ({ params }) => {
	const response = await fetch(
		`https://snippets.tylermcrobert.com/api/tracks/${params.slug}`
	);

	const json: SnippetsAPIResponse = await response.json();

	if (!json.track) {
		error(404, 'not found');
	}

	return { ...json.track, pageTitle: json.track.title };
};
