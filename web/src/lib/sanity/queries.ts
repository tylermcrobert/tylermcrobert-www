import type { InputValue } from '@portabletext/svelte/ptTypes';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import groq from 'groq';

export const infoQuery = groq`
  *[_type == 'info' ][0]{
    bio,
    playlists[]-> {
      "slug": slug.current,
      link,
      title,
    }
  }
`;

export type InfoPlaylist = {
  link: string;
  title: string;
  slug: string;
};

export type InfoQuery = {
  bio: string;
  playlists: InfoPlaylist[];
};

export const homeQuery = groq`
  *[_type == 'context' && slug.current == 'default'][0]{
    caseStudies[]-> { 
      title,
      'slug': slug.current
    }
  }
`;

export type HomeQuery = {
  caseStudies: HomeCaseStudy[];
};

export type HomeCaseStudy = {
  title: string;
  slug: string;
};

/**
 * Website info + modules
 */

export const caseStudyQuery = groq`
  *[_type == 'caseStudy' && slug.current == $slug][0]{
    title,
    deliverables,
    intro,
    date,
    modules[]{
      _type == 'dynamicImage' => {
        ...
      },
      _type == 'website' => {
        _type,
        showFrame,
        "background": backgroundImg.asset,
        theme-> {
          "background": background.hex,
          "frame": frame.hex,
        },
        "media":media[0]{
          _type,
          "image": asset,
          "video": videoFile.asset->url,
        },
      },
    }
  }
`;

export type CaseStudyQuery = {
  title: string;
  deliverables: string[];
  intro: string;
  date: string;
  description: PortableText;
  modules: PortfolioModule[];
};

export type PortfolioModule = ModuleWebsite | ModuleDynamicImage;

/**
 * Website
 */

export type ModuleWebsite = {
  _type: 'website';
  media: WebsiteVideo | WebsiteImage;
  theme: { background: string; frame: string };
  background: SanityImageSource | null;
  showFrame: boolean | null;
};

type WebsiteVideo = { _type: 'video'; video: string };
type WebsiteImage = { _type: 'image'; image: SanityImageSource };

/**
 * Dynamic Image
 */

export type ModuleDynamicImage = { _type: 'dynamicImage' };

/**
 * Utils
 */

export type PortableText = InputValue;
