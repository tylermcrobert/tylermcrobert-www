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
