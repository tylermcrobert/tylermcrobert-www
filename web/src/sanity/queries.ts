import groq from 'groq';
import type {
	SanityImageAsset,
	SITE_QUERYResult,
	Settings,
	PAGE_QUERYResult,
	CASE_STUDY_QUERYResult,
	Website
} from './types';
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
  "image": image,
  "video": video.asset->{
    "id": playbackId,
    "aspect": data.aspect_ratio,
    "showControls": ^.showVideoControls,
    "posterFrame": ^.posterFrame
  }
}`;

export type MediaProjectionVideo = {
	id: string;
	aspect: string;
	showControls: boolean;
	posterFrame: SanityImageAsset;
};

export type MediaProjection = Nullable<{
	image: SanityImageAsset;
	video: MediaProjectionVideo;
}>;

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
 * Website
 */

const MODULE_WEBSITE = `//groq
  _type == 'website' => {
    theme->{
      "dots": dots.hex,
      "frame": frame.hex,
      "background": background.hex,
    },
    backgroundImg,
    showFrame,
    media${MEDIA_PROJECTION},
  }
`;

export type ModuleWebsite = Nullable<{
	_type: 'website';
	media: MediaProjection;
	theme: Nullable<{
		frame: string;
		background: string;
		dots: string;
	}>;
}> &
	Pick<Website, 'showFrame' | 'backgroundImg'>;

/**
 * Modules
 */

const MODULES_PROJECTION = groq`{
  _type,
  ${MODULE_MEDIA_BLOCK},
  ${MODULE_TEXT_BLOCK},
  ${MODULE_WEBSITE}
}
`;

export type Module = ModuleMediaBlock | ModuleTextBlock | ModuleWebsite;

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

export type PageQuery = PAGE_QUERYResult & Nullable<{ modules: Module[] }>;

export const HOMEPAGE_QUERY = groq`
  *[_id == 'homepage'][0]{
    modules[]${MODULES_PROJECTION},
  }
`;

export const CASE_STUDY_QUERY = groq`
  *[_type == 'caseStudy' && slug.current == $slug][0]{
    intro,
    deliverables,
    date,
    title,
    description,
    metadata,
    "modules": modulesV2[]${MODULES_PROJECTION},
  }
`;

export type CaseStudyQuery = CASE_STUDY_QUERYResult &
	Nullable<{ modules: Module[] }>;

/*******************************************************************************
 * GLOBAL
 ******************************************************************************/

export const SITE_QUERY = groq`{
  "settings": *[_id == "settings"][0]{
    metadata,
    siteTitle,
  },
  "homepageTitle": *[_id == 'homepage'][0].title
}`;

export type SiteQuery = Pick<SITE_QUERYResult, 'homepageTitle'> &
	Nullable<{
		settings: Pick<Settings, 'metadata' | 'siteTitle'>;
	}>;

export const SITEMAP_QUERY = groq`{
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
