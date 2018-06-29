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

  const csListData = props.caseStudiesList;
  const list = csListData.map((caseStudies) => {
    const { uid, data: { title } } = caseStudies.case_study_item;

    const CaseStudyTitle = styled.h2`
      color: #6a6a6a;
      cursor: pointer;
      padding: .38198em 0;
      text-align:center;
      transition: 1s color 4.50s ease;

      &:hover {
        color: #f6f6f6;
        transition:  color .25s ease;
      }
    `;


    return (
      <Link to={uid} key={uid}>
        <li key={uid} onMouseEnter={() => props.handleHoveredCaseStudy(uid)}>
          <CaseStudyTitle slug={uid}>
            {RichText.asText(title)}
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
