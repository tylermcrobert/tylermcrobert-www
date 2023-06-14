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
    description,
    modules[]{
      _type == 'dynamicImage' => {
        _type,
        "image": image.asset-> { _id, "aspect": metadata.dimensions.aspectRatio },
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
          "image": asset-> { _id, "aspect": metadata.dimensions.aspectRatio },
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
  media: {
    video: string;
    image: ImageWithMetadata;
  };
  theme: { background: string; frame: string };
  background: SanityImageSource | null;
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
 * Utils
 */

export type PortableText = InputValue;
export type ImageWithMetadata = SanityImageSource & {
  _id: string;
  aspect: number;
};
