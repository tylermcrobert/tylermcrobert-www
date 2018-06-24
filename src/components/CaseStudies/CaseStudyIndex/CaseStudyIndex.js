import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

export default function CaseStudyIndex(props) {
  const csListData = props.doc.data.case_study_list;
  const list = csListData.map((caseStudies) => {
    const caseStudy = caseStudies.case_study_item;

    const CaseStudyTitle = styled.h2`
      color: #a5a5a5;
      cursor: pointer;
      padding: .38198em 0;

      &:hover {
        color: black;
      }
    `;

    return (
      <Link to={caseStudy.uid} key={caseStudy.id}>
        <li key={caseStudy.slug}>
          <CaseStudyTitle
            onMouseEnter={() => props.hoverCaseStudyHandler(caseStudy)}
            slug={caseStudy.slug}
          >
            {RichText.asText(caseStudy.data.title)}
          </CaseStudyTitle>
        </li>
      </Link>
    );
  });
  return (
    <div className="caseStudyIndex">
      <ul className="caseStudyIndex__list">
        {list}
      </ul>
    </div>
  );
}
