import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Tags = ({ tags, activeTags }) => (
  <ul>
    {tags.map((tag) => {
    const isActive = activeTags.indexOf(tag) !== -1;
    return (
      <Tag key={tag} isActive={isActive}>
        {tag}
      </Tag>
    );
  })}
  </ul>
);

const Tag = styled.ul`
  display: inline;
  padding: 0 1rem;
  transition: color 125ms linear;
  color: ${({ isActive, theme }) => !isActive && theme.color.light}
`;

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
