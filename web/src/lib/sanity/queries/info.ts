import groq from 'groq';

export const infoQuery = groq`
  *[_type == 'info' ][0]{
    bio,
    clients,
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
  clients: string[];
};
