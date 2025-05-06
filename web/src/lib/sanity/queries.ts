import groq from 'groq';
import type { SanityImageAsset, SITE_QUERYResult, Settings } from './types';
import type { InputValue } from '@portabletext/svelte';

/*******************************************************************************
 * PROJECTIONS
 ******************************************************************************/

export const LINK_PROJECTION = groq`{
  label,
  href,
  reference-> {
    _type,
    title,
    "slug": slug.current 
  }
}`;

export type LinkProjection = {
	label: string;
	href: string;
	reference?: {
		_type: string;
		title: string;
		slug: string;
	};
};

const RICH_TEXT_PROJECTION = groq`{
  ...,
 "markDefs": coalesce(
    markDefs[]{
      ...,
      _type == "internalLink" => {
        'type': @.reference->_type,
        "slug": @.reference->slug.current
      }
    }, 
    []
  )
}`;

export type RichTextProjection = InputValue;

export const MEDIA_PROJECTION = groq`{
  "_type": "mediaProjection",
  "asset": select(
    defined(@.image) => {
      "_type": "image",
      "image": @.image
    },
    defined(@.video.asset) => {
      "_type": "video",
      "video": @.video.asset-> {
        "id": playbackId,
        "aspect": data.aspect_ratio,
        "showControls": ^.showVideoControls,
        "posterFrame": ^.posterFrame
      }
    },
    null
  ),
}`;

export type MediaProjectionVideo = {
	id: string;
	aspect: string;
	showControls: boolean;
	posterFrame: SanityImageAsset;
};

type MediaProjectionVideoAsset = {
	_type: 'video';
	video: MediaProjectionVideo;
};

type MediaProjectionImageAsset = {
	_type: 'image';
	image: SanityImageAsset;
};

export type MediaProjectionAsset =
	| MediaProjectionVideoAsset
	| MediaProjectionImageAsset;

export type MediaProjection = {
	_type: 'mediaProjection';
	asset: MediaProjectionAsset | null;
};

/*******************************************************************************
 * MODULES
 ******************************************************************************/

/**
 * Text Block
 */

const MODULE_TEXT_BLOCK = `// groq
  _type == 'textBlock' => {
    richText[]${RICH_TEXT_PROJECTION},
  }
`;

export type ModuleTextBlock = Nullable<{
	_type: 'textBlock';
	richText: RichTextProjection;
}>;

/**
 * Media Block
 */

const MODULE_MEDIA_BLOCK = `// groq
  _type == 'mediaBlock' => {
    media${MEDIA_PROJECTION}
  }
`;

export type ModuleMediaBlock = Nullable<{
	_type: 'mediaBlock';
	media: MediaProjection;
}>;

/**
 * Modules
 */

const MODULES_PROJECTION = groq`{
  _type,
  ${MODULE_MEDIA_BLOCK},
  ${MODULE_TEXT_BLOCK},
}
`;

export type Module = ModuleMediaBlock | ModuleTextBlock;

/*******************************************************************************
 * PAGES
 ******************************************************************************/

export const PAGE_QUERY = groq`
  *[_type == 'page' && slug.current == $slug][0]{
    title,
    metadata,
    modules[]${MODULES_PROJECTION},
  }
`;

export const HOMEPAGE_QUERY = groq`
  *[_id == 'homepage'][0]{
    modules[]${MODULES_PROJECTION},
  }
`;

/*******************************************************************************
 * GLOBAL
 ******************************************************************************/

export const SITE_QUERY = groq`{
  "footer": *[_id == "footer"][0]{
    links[]${LINK_PROJECTION},
  },
  "navigation": *[_id == "navigation"][0]{
    links[]${LINK_PROJECTION},
  },
  "settings": *[_id == "settings"][0]{
    metadata,
    siteTitle,
    googleAnalyticsId,
  },
  "homepageTitle": *[_id == 'homepage'][0].title
}`;

export type SiteQuery = Pick<SITE_QUERYResult, 'homepageTitle'> &
	Nullable<{
		footer: { links: LinkProjection[] };
		navigation: { links: LinkProjection[] };
		settings: Pick<Settings, 'metadata' | 'siteTitle' | 'googleAnalyticsId'>;
	}>;

export const SITEMAP_QUERY = groq`{
  "homepage": *[_type == 'homepage'][0]{
    _updatedAt,
  },

  "pages": *[_type == 'page'][]{ 
    title,
    "slug": slug.current,
    _updatedAt,
  }
}`;

/*******************************************************************************
 * UTILLS
 ******************************************************************************/

export type Nullable<T> = {
	[P in keyof T]: T[P] | null;
};
