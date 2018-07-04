import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Trail, animated } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';
import { Link } from 'react-router-dom';
import CaseStudyContextHOC from '../../containers/CaseStudyContextHOC/CaseStudyContextHOC';
import './CaseStudyIndex.css';

const CaseStudyIndex = (props) => {
  const list = props.caseStudiesList.map((caseStudies) => {
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
      <li
        className="caseStudyIndex__list__item"
        onMouseEnter={() => props.handleHoveredCaseStudy(uid)}
      >
        <Link to={uid} key={uid}>
          <CaseStudyTitle slug={uid}>
            {RichText.asText(title)}
          </CaseStudyTitle>
        </Link>
      </li>
    );
  });

  return (
    <div className="caseStudyIndex">
      <ul className="caseStudyIndex__list">
        <Trail
          native
          impl={TimingAnimation}
          config={{ duration: 900, easing: Easing.bezier(0, 0.75, 0.25, 1) }}
          from={{ opacity: 0, scale: 0.9 }}
          to={{ opacity: 1, scale: 1 }}
          keys={list.map(listItem => listItem.props.children.key)}
        >
          {list.map(item => ({ scale, opacity }) => (
            <animated.div
              className="box"
              onClick={this.toggle}
              style={{
                opacity,
                transform: scale.interpolate(s => `scale(${s})`),
              }}
            >
              {item}
            </animated.div>
          ))}
        </Trail>
      </ul>
    </div>
  );
};

export default CaseStudyContextHOC(CaseStudyIndex);
