import React from 'react';
import styled from 'styled-components';

const Tags = (props) => {
  const TagWrapper = styled.ul`
    display: inline-block;
    transform: rotate(270deg);
    position: absolute;
    left: calc(-50vh + 1.5em);
    top: 50vh;
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
      color: ${tagShouldHighlight ? '#a5a5a5' : 'black'}
    `;

    return (
      <Tag key={tag}>{tag}</Tag>
    );
  });

  return (
    <TagWrapper>
      {tagList}
    </TagWrapper>
  );
};

export default Tags;
