import React from 'react';
import styled from 'styled-components';

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

  const tagList = props.tags.map((tag) => {
    const csIsSelected = props.currentCaseStudy !== null;
    const csIsHovered = !csIsSelected && props.hoveredCaseStudy;
    let tagShouldHighlight = false;

    if (csIsSelected) {
      tagShouldHighlight = props.currentCaseStudy.tags.indexOf(tag) !== -1;
    } else if (csIsHovered) {
      tagShouldHighlight = props.hoveredCaseStudy.tags.indexOf(tag) !== -1;
    }

    const Tag = styled.li`
      display: inline-block;
      margin: auto 1em;
      font-size: .81em;
      color: ${tagShouldHighlight ? 'black' : '#a5a5a5'}
    `;

    return (
      <Tag className="tagIndicator__tag" key={tag}>{tag}</Tag>
    );
  });

  if (props.tags) {
    return (
      <TagWrapper className="tagIndicator">
        {tagList}
      </TagWrapper>
    );
  }
  return null;
};

export default Tags;
