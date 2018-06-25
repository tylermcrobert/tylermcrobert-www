import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tags = (props) => {
  const TagWrapper = styled.ul`
    position: absolute;
    left: calc(-50vh + 1.5em);
    top: calc(50vh - 1em);
    display: inline-block;
    transform: rotate(270deg);
    width: 100vh;
    text-align: center;
  `;

  const tagList = props.tagList.map((tagName) => {
    const _tagShouldHighlight = props.activeTags.indexOf(tagName) !== -1;
    const Tag = styled.li`
      display: inline-block;
      margin: auto 1em;
      font-size: .81em;
      color: ${_tagShouldHighlight ? 'black' : '#a5a5a5'}
    `;

    return (
      <Tag className="tagIndicator__tag" key={tagName}>{tagName}</Tag>
    );
  });

  return (
    <TagWrapper className="tagIndicator">
      {tagList}
    </TagWrapper>
  );
};

Tags.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Tags;
