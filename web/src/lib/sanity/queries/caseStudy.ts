import type { InputValue } from '@portabletext/svelte/ptTypes';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import groq from 'groq';

// TODO: Include mobileWebsite timedSlides tripleImage

const imgProjection = groq`{
  _id, 
  "aspect": metadata.dimensions.aspectRatio,
}`;

const mobileWebsiteMediaProjection = groq`{
  _type,
  "image": asset-> ${imgProjection},
  "video": videoFile.asset->url,
}    
`;

export const caseStudyQuery = groq`
  *[_type == 'caseStudy' && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    deliverables,
    intro,
    date,
    description,
    modules[]{
      _type == 'textBlock' => {
        ...,
        _type,
      },
      
      _type == 'dynamicImage' => {
        _type,
        "image": image.asset-> ${imgProjection},
        aspect,
        span,
      },

      _type == 'website' => {
        _type,
        showFrame,
        "background": backgroundImg.asset->${imgProjection},
        theme-> {
          "background": background.hex,
          "frame": frame.hex,
        },
        "media":media[0]${mobileWebsiteMediaProjection},
      },

      _type == 'mobileWebsite' => {
        _type,
        "frames": frames[]${mobileWebsiteMediaProjection}
      }
    }
  }
`;

export type CaseStudyQuery = {
  slug: string;
  title: string;
  deliverables: string[];
  intro: string;
  date: string;
  description: PortableText;
  modules: PortfolioModule[];
};

export type PortfolioModule =
  | ModuleWebsite
  | ModuleDynamicImage
  | ModuleTextBlock
  | ModuleMobileWebsite;

/**
 * Website
 */

export type ModuleWebsite = {
  _type: 'website';
  media: WebsiteModuleMedia;
  theme: { background: string; frame: string };
  background: ImageWithMetadata | null;
  showFrame: boolean | null;
};

/**
 * Dynamic Image
 */

export type ModuleDynamicImage = {
  _type: 'dynamicImage';
  span: 'half' | 'full' | null;
  image: ImageWithMetadata;
  aspect: number;
};

/**
 * Dynamic Image
 */

export type ModuleTextBlock = {
  _type: 'textBlock';
  content: PortableText;
};
/**
 * Mobile Website
 */

export type ModuleMobileWebsite = {
  _type: 'mobileWebsite';
  frames: WebsiteModuleMedia[];
};

/**
 * Utils
 */

export type WebsiteModuleMedia = {
  video: string;
  image: ImageWithMetadata;
};

export type PortableText = InputValue;
export type ImageWithMetadata = SanityImageSource & {
  _id: string;
  aspect: number;
};
