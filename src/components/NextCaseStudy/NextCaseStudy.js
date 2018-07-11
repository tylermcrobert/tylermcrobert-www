import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NextCaseStudy = props => (
  <Link
    to={props.nextCaseStudy.uid}
  >
    <NextLink>
      <p>Next</p>
      <h1>{props.nextCaseStudy.data.title[0].text}</h1>
    </NextLink>
  </Link>);

const NextLink = styled.div`
  padding: 4.2358em 1em;
  text-align: center;
`;
export default NextCaseStudy;
