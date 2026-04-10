import { error } from '@sveltejs/kit';

import {
	getMuxThumbnailUrl,
	parseAspectStr
} from '$components/Video/VideoFromProjection.util.js';
import type { Nullable } from '$sanity';

export const load = async ({
	params,
	locals: {
		sanity: { client }
	}
}) => {
	const doc: Nullable<{
		title: string;
		slug: Nullable<{
			current: string;
		}>;
		video: Nullable<{
			playbackId: string;
			aspect: string;
		}>;
	}> = await client.fetch(
		`*[_type == "videoDocument" && slug.current == $slug][0]{
      title,
      slug,
      "video": video.asset-> {
        playbackId,
				"aspect": data.aspect_ratio,
      }
    }`,
		{ slug: params.slug }
	);

	if (!doc || !doc.video || !doc.video.playbackId) {
		return error(404);
	}

	return {
		slug: params.slug,
		playbackId: doc.video.playbackId,
		aspect: parseAspectStr(doc.video.aspect || '16:9'),
		poster: getMuxThumbnailUrl(doc.video.playbackId, 0)
	};
};
