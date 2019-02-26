import React, { useContext } from 'react';
import { RichText } from 'prismic-reactjs';
import { AppContext } from 'containers/App/App';


import posed from 'react-pose';
import { transitions } from 'containers/App/styled';
import PropTypes from 'prop-types';
import FullFrame from 'components/FullFrame/FullFrame';
import Slices from './slices/slices';
import Styled from './style';


const getDataByUid = (uid) => {
  const { caseStudies } = useContext(AppContext);
  const index = caseStudies.map(data => data.uid).indexOf(uid);
  return caseStudies[index];
};

const CaseStudy = ({ uid }) => {
  const data = getDataByUid(uid);

  const { deliverables } = data.data;
  const title = RichText.asText(data.data.title);
  const description = RichText.asText(data.data.description);
  return (
    <Fade>
      <CaseStudy.Cover {...{ title, description, deliverables }} />
      <Slices modules={data.data.cs_content} title={RichText.asText(data.data.title)} />
    </Fade>
  );
};


const { standard, exitFast } = transitions;

const Fade = posed.div({
  enter: { opacity: 1, transition: standard },
  exit: { opacity: 0, transition: exitFast },
});

CaseStudy.Cover = ({ description, deliverables, title }) => (
  <FullFrame context>
    <Styled.Cover>
      <Styled.TitleWrapper>
        <h1>{title}</h1>
      </Styled.TitleWrapper>
      <Styled.Info>
        <Styled.Deliverables>
          {deliverables}
        </Styled.Deliverables>
        <Styled.Description>
          {description}
        </Styled.Description>
      </Styled.Info>
    </Styled.Cover>
  </FullFrame>
);

CaseStudy.Cover.propTypes = {
  description: PropTypes.string.isRequired,
  deliverables: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default React.memo(CaseStudy);
