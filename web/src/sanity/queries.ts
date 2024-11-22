import groq from 'groq';
import type { Settings, TextBlock, SanityImageAsset } from './types';

/*****************************************************
 * PROJECTIONS
 *****************************************************/

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
  "markDefs": markDefs[]{
    ...,
    _type == 'link' => {
      "link": @.link${LINK_PROJECTION}
    }
  }
}`;

export const MEDIA_PROJECTION = groq`{
  "image": @.media.image
}`;

export type MediaProjection = Nullable<{
	image: SanityImageAsset;
}>;

/*****************************************************
 * MODULES
 *****************************************************/

export const MODULES_PROJECTION = groq`{
  _type,
  
  _type == 'textBlock' => {
    richText[]${RICH_TEXT_PROJECTION},
  },

  _type == 'mediaBlock' => ${MEDIA_PROJECTION}
}`;

/**
 * TYPES
 */

export type ModuleTextBlock = Nullable<{
	_type: 'textBlock';
}> &
	Pick<TextBlock, 'richText'>;

export type ModuleMediaBlock = Nullable<{
	_type: 'mediaBlock';
}> &
	MediaProjection;

/**
 * Export
 */

export type Module = ModuleTextBlock | ModuleMediaBlock;

/*****************************************************
 * PAGES
 *****************************************************/

export const PAGE_QUERY = groq`
  *[_type == 'page' && slug.current == $slug][0]{
    title,
    metadata,
    modules[]${MODULES_PROJECTION},
  }
`;

export const HOMEPAGE_QUERY = groq`
  *[_id == 'homepage'][0]{
    title,
    modules[]${MODULES_PROJECTION},
  }
`;

/*****************************************************
 * GLOBAL
 *****************************************************/

export const SITE_QUERY = groq`{
  "footer": *[_id == "footer"][0]{
    links[]${LINK_PROJECTION},
  },
  "navigation": *[_id == "navigation"][0]{
    links[]${LINK_PROJECTION}
  },
  "settings": *[_id == "settings"][0]{
    metadata,
    siteTitle,
  }
}`;

export type SiteQuery = Nullable<{
	footer: { links: LinkProjection[] };
	navigation: { links: LinkProjection[] };
	settings: Pick<Settings, 'metadata' | 'siteTitle'>;
}>;

/*****************************************************
 * UTILS
 *****************************************************/

export type Nullable<T> = {
	[P in keyof T]: T[P] | null;
};
