import groq from 'groq';

export const indexQuery = groq`
  *[_type == 'context' && slug.current == $slug][0]{
    title,
    caseStudies[]-> { 
      title,
      'slug': slug.current
    }
  }
`;

export type IndexQuery = {
  caseStudies: HomeCaseStudy[];
  title: string | null;
};

export type HomeCaseStudy = {
  title: string;
  slug: string;
};
