import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import includes from 'array-includes';

const Tags = ({
  tags, activeTags, handleHover, setHoveredTag, hoveredTag,
}) => {
  const handleTagHover = (tag) => {
    setHoveredTag(tag);
    handleHover([], -1);
  };

  return (
    <ul>
      {tags.map((tag) => {
        const isActive = includes(activeTags, tag) || tag === hoveredTag;
        return (
          <Tag
            key={tag}
            isActive={isActive}
            onMouseEnter={() => handleTagHover(tag)}
            onMouseLeave={() => handleTagHover(null)}
          >
            {tag}
          </Tag>
        );
      })}
    </ul>
  );
};

const Tag = styled.ul`
  display: inline;
  padding: 0 1rem;
  transition: color 125ms linear;
  color: ${({ isActive, theme }) => !isActive && theme.color.light};
`;

Tags.defaultProps = {
  hoveredTag: null,
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleHover: PropTypes.func.isRequired,
  setHoveredTag: PropTypes.func.isRequired,
  hoveredTag: PropTypes.string,
};

export default Tags;
