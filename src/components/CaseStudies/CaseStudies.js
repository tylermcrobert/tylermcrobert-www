import React from 'react';
import styled from 'styled-components';
import Tags from './Tags/Tags';
import IndexIndicator from './IndexIndicator/IndexIndicator';
import CaseStudyIndex from './CaseStudyIndex/CaseStudyIndex';
import CaseStudy from '../../containers/CaseStudy/CaseStudy';

const Main = styled.main`
  text-align:center;
  position: relative;
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;


const CaseStudies = props =>
  (
    <Main className="caseStudies">
      { (!props.currentCaseStudy || !props.isFloating) &&
      <React.Fragment>
        <Tags
          tags={props.tags}
          currentCaseStudy={props.currentCaseStudy}
          hoveredCaseStudy={props.hoveredCaseStudy}
        />
        <IndexIndicator
          currentCaseStudy={props.currentCaseStudy}
          hoveredCaseStudy={props.hoveredCaseStudy}
          getPageIndex={props.getPageIndex}
          doc={props.doc}
        />
      </React.Fragment>
      }
      { props.currentCaseStudy ?
        <CaseStudy
          slug={props.currentCaseStudy.uid}
          key={props.currentCaseStudy.uid}
          prismicCtx={props.prismicCtx}
          changeCaseStudyHandler={props.changeCaseStudyHandler}
          isFloating={props.isFloating}
          currentCaseStudy={props.currentCaseStudy}
        />
      :
        <CaseStudyIndex
          doc={props.doc}
          prismicCtx={props.prismicCtx}
          changeCaseStudyHandler={props.changeCaseStudyHandler}
          currentCaseStudy={props.currentCaseStudy}
          hoverCaseStudyHandler={props.hoverCaseStudyHandler}
        />
      }
    </Main>
  );
export default CaseStudies;
