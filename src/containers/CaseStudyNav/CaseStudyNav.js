import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import { Link } from 'react-router-dom';


const DirectoryLinks = ({ caseStudies, handleHover }) => {
  const Links = () => (
    <ContextFrame>
      <ul>
        {caseStudies.map(({
        id, uid, data, tags,
      }, i) => (
        <ListItem key={id} onMouseEnter={() => handleHover(tags, i)}>
          <ListLink to={`/${uid}`}>{RichText.asText(data.title)}</ListLink>
        </ListItem>
      ))}
      </ul>
    </ContextFrame>

  );
  return <Links />;
};

const ListItem = styled.li`
  cursor: pointer;
  text-align: center;
  transition: color 0.8s ease 0s;
  font-size: 1.618em;
`;

const ListLink = styled(Link)`
  transition: color 125ms linear;
  color: ${({ theme }) => theme.color.light};
  line-height:2;

  &:hover {
    color: ${({ theme }) => theme.color.main};
  }
`;

DirectoryLinks.propTypes = {
};

export default DirectoryLinks;
