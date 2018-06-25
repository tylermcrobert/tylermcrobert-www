import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import CaseStudyContextHOC from '../../containers/CaseStudyContextHOC/CaseStudyContextHOC';

const CaseStudyIndex = (props) => {
  const CaseStudyIndexWrapper = styled.div`
    padding: 0 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  `;

  const csListData = props.doc.data.case_study_list;
  const list = csListData.map((caseStudies) => {
    const caseStudy = caseStudies.case_study_item;

    const CaseStudyTitle = styled.h2`
      color: #a5a5a5;
      cursor: pointer;
      padding: .38198em 0;
      text-align:center;

      &:hover {
        color: black;
      }
    `;

    return (
      <Link to={caseStudy.uid} key={caseStudy.id}>
        <li key={caseStudy.uid} onMouseEnter={() => props.handleHoveredCaseStudy(caseStudy.uid)}>
          <CaseStudyTitle slug={caseStudy.uid}>
            {RichText.asText(caseStudy.data.title)}
          </CaseStudyTitle>
        </li>
      </Link>
    );
  });
  return (
    <CaseStudyIndexWrapper className="caseStudyIndex">
      <ul className="caseStudyIndex__list">
        {list}
      </ul>
    </CaseStudyIndexWrapper>
  );
};

export default CaseStudyContextHOC(CaseStudyIndex);
