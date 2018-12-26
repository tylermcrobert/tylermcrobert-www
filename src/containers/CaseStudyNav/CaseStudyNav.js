import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const DirectoryLinks = ({ caseStudies, handleHover }) => {
  const Links = () => (
    <ContextFrame>
      <ul>
        {caseStudies.map(({
        id, uid, data, tags,
      }, i) => (
        <ListItem
          initialPose="out"
          pose="in"
          i={i}
          key={id}
          onMouseEnter={() => handleHover(tags, i)}
        >
          <ListLink to={`/${uid}`}>{RichText.asText(data.title)}</ListLink>
        </ListItem>
      ))}
      </ul>
    </ContextFrame>

  );
  return <Links />;
};

const AnimateIn = posed.li(({ i }) => {
  const delay = i * 60;
  const transition = {
    duration: 700,
    ease: 'circOut',
  };
  return ({
    out: {
      opacity: 0, scale: 0.75, y: '1em', ...{ delay }, ...transition,
    },
    in: {
      opacity: 1, scale: 1, y: 0, ...{ delay }, ...{ transition },
    },
  });
});

const ListItem = styled(AnimateIn)`
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

export default React.memo(DirectoryLinks);
