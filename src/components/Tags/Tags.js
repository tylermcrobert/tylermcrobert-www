import React from 'react';
import styled from 'styled-components';

const Tags = (props) => {
  const tagList = props.tags.map((tag) => {
    const caseStudyIsSelected = props.currentCaseStudy !== null;
    const caseStudyIsHovered = !caseStudyIsSelected && props.hoveredCaseStudy;
    let recievedTag = false;

    if (caseStudyIsSelected) {
      recievedTag = props.currentCaseStudy.tags.indexOf(tag) !== -1;
    }

    if (caseStudyIsHovered) {
      recievedTag = props.hoveredCaseStudy.tags.indexOf(tag) !== -1;
    }

    const classList = recievedTag ? ['active'] : [null];

    return (
      <li key={tag} className={`caseStudies__tags ${classList.join('  ')}`}>{tag}</li>
    );
  });

  const TagWrapper = styled.div`
    display: inline-block;
    transform: rotate(270deg);
    position: absolute;
    left: calc(-50vh + 1em);
    top: 50%;
    width: 100vh;
    text-align:center;

    li {
      display: inline-block;
      margin auto 10px;
    };
  `;

  return (
    <TagWrapper>
      <ul className="caseStudies__tags">{tagList}</ul>
    </TagWrapper>
  );
};

export default Tags;
