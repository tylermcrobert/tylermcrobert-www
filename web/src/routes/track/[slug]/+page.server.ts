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
	// TODO: Remove this and surface it via api once integrating mux is complete
	if (params.slug === 'wistful') {
		return {
			title:
				'A Memory: A Moment / The Sky Above: A River, An Ember / A Borrowed Tune: Bless the Telephone',
			primaryVersion: {
				date: '2026-04-30',
				duration: 343,
				assetUrl: '/wistful.mp3'
			}
		};
	}

	const response = await fetch(
		`https://snippets.tylermcrobert.com/api/tracks/${params.slug}`
	);

	const json: SnippetsAPIResponse = await response.json();

	if (!json.track) {
		error(404, 'not found');
	}

	return { ...json.track, pageTitle: json.track.title };
};
