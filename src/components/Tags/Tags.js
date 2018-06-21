import React from 'react';
import styled from 'styled-components';

const Tags = (props) => {
  const TagWrapper = styled.ul`
    display: inline-block;
    transform: rotate(270deg);
    position: absolute;
    left: calc(-50vh + 1em);
    top: 50%;
    width: 100vh;
    text-align: center;
  `;

  const tagList = props.tags.map((tag) => {
    const csIsSelected = props.currentCaseStudy !== null;
    const csIsHovered = !csIsSelected && props.hoveredCaseStudy;
    let recievedTag = false;

    if (csIsSelected) {
      recievedTag = props.currentCaseStudy.tags.indexOf(tag) !== -1;
    } else if (csIsHovered) {
      recievedTag = props.hoveredCaseStudy.tags.indexOf(tag) !== -1;
    }

    const Tag = styled.li`
      display: inline-block;
      margin: auto 10px;
      color: ${recievedTag ? 'black' : '#aaa'}
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
