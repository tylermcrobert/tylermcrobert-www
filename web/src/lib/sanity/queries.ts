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

export const caseStudyQuery = groq`
  *[_type == 'caseStudy' && slug.current == $slug][0]{
    title,
    deliverables,
    intro,
    date,
  }
`;

export type CaseStudyQuery = {
	title: string;
	deliverables: string[];
	intro: string;
	date: string;
};
