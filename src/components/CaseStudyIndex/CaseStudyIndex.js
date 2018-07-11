import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import { easing } from 'popmotion';
import CaseStudyContextHOC from '../../containers/CaseStudyContextHOC/CaseStudyContextHOC';

const CaseStudyIndex = (props) => {
  const list = props.caseStudiesList.map((caseStudies) => {
    const { uid, data: { title } } = caseStudies.case_study_item;
    return (
      <PosedListItem key={uid}>
        <Link to={uid} onMouseEnter={() => props.handleHoveredCaseStudy(uid)}>
          <CaseStudyTitle slug={uid}>
            {RichText.asText(title)}
          </CaseStudyTitle>
        </Link>
      </PosedListItem>
    );
  });

  return (
    <PoseGroup animateOnMount>
      <PosedIndex key="posedIndex">
        <ul className="caseStudyIndex__list">
          {list}
        </ul>
      </PosedIndex>
    </PoseGroup>
  );
};

const CaseStudyIndexWrapper = styled.div`
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;
const CaseStudyTitle = styled.h2`
  color: #6a6a6a;
  cursor: pointer;
  padding: .38198em 0;
  text-align:center;
  transition: color .8s ease;

  &:hover{
    transition: color .3s ease;
    color:#f6f6f6!important;
  }
`;

const config = {
  ease: easing.cubicBezier(0, 0.75, 0.5, 1),
  duration: 1000,
  get delay() { return this.duration * 0.25; },
};

const IndexAnimation = {
  enter: {
    scale: 0.9999,
    staggerChildren: (config.duration / 20),
    opacity: 1,
    transition: {
      ...config,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    staggerChildren: 0,
  },
};

const PosedListItemConfig = {
  enter: {
    scale: 0.9999,
    opacity: 1,
    transition: {
      ...config,
      duration: config.duration * 0.9,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

export default CaseStudyContextHOC(CaseStudyIndex);
const PosedIndex = posed(CaseStudyIndexWrapper)(IndexAnimation);
const PosedListItem = posed.li(PosedListItemConfig);
