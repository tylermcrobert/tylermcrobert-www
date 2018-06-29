import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tags = (props) => {
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
    <ul>{ tagList }</ul>
  );
};

Tags.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Tags;
