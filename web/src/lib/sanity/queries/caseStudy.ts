import type { InputValue } from '@portabletext/svelte/ptTypes';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import groq from 'groq';

// TODO: Include mobileWebsite textBlock timedSlides tripleImage

export const caseStudyQuery = groq`
  *[_type == 'caseStudy' && slug.current == $slug][0]{
    title,
    deliverables,
    intro,
    date,
    modules[]{
      _type == 'dynamicImage' => {
        _type,
        "image": image.asset,
        aspect,
        span,
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

export type ModuleDynamicImage = {
  _type: 'dynamicImage';
  span: 'half' | 'full' | null;
  image: SanityImageSource;
  aspect: number;
};

/**
 * Utils
 */

export type PortableText = InputValue;
