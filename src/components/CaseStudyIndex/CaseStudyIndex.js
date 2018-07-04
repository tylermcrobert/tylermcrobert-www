import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import CaseStudyContextHOC from '../../containers/CaseStudyContextHOC/CaseStudyContextHOC';

const CaseStudyIndex = (props) => {
  const list = props.caseStudiesList.map((caseStudies) => {
    const { uid, data: { title } } = caseStudies.case_study_item;
    return (
      <PosedListItem onMouseEnter={() => props.handleHoveredCaseStudy(uid)} key={uid}>
        <Link to={uid}>
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
  transition: 1s color 4.50s ease;
`;

const PosedIndexConfig = {
  enter: {
    scale: 1,
    opacity: 1,
    staggerChildren: 75,
    transition: { delay: 150, duration: 600 },
  },
  exit: {
    scale: 0.97,
    opacity: 0,
    staggerChildren: 100,
    transition: { delay: 300, duration: 600 },
  },
};

const PosedListItemConfig = {
  enter: {
    ...PosedIndexConfig.enter,
    scale: 0.9999,
    transition: { delay: 0, duration: 1000 },

  },
  exit: {
    ...PosedIndexConfig.exit,
    scale: 0.8,
  },
};

export default CaseStudyContextHOC(CaseStudyIndex);
const PosedIndex = posed(CaseStudyIndexWrapper)(PosedIndexConfig);
const PosedListItem = posed.li(PosedListItemConfig);
