import React from 'react';

const CaseStudy = (props) => {
  let caseStudyInfo = null;
  const caseStudyisSelected = (props.currentCaseStudy !== null);
  const caseStudyIsMatch = props.id === props.currentCaseStudy;

  const componentExpandedHandler = () => {
    props.changeCaseStudy(props.id);
  };

  let header = (
    <h2 onClick={componentExpandedHandler}>
      {props.id}
    </h2>
  );

  if (caseStudyIsMatch && caseStudyisSelected) {
    caseStudyInfo = (
      <div className="caseStudy__info">
        <p>Web App, User Experience</p>
        <p>
          The rebirth of the imaging and photography brand Fujifilm is Fuji Imaging. The rejuvenation of this brand is aimed at reflecting the robust creativity and authentic vibrancy which is the foundation of the ethos of Fuji Imaging. Fuji Imaging strongly believes in the beauty of life and also in having the ability to properly capture it.
        </p>
      </div>);
    header = (
      <div>
        <button onClick={() => props.changeCaseStudy(null)}>
          X
        </button>
        {header}
      </div>);
  }

  let caseStudy = (
    <li>
      {header}
      {caseStudyInfo}
    </li>
  );

  if (caseStudyisSelected && !caseStudyIsMatch) {
    caseStudy = null;
  }

  return caseStudy;
};

export default CaseStudy;
