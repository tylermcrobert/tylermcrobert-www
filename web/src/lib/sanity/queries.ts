import groq from 'groq';

export const infoQuery = groq`
  *[_type == 'info' ][0]{
    bio,
  }
`;

export type InfoQuery = {
	bio: string;
};
