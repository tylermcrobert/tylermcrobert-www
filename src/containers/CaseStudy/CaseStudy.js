import React from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import FullFrame from 'components/FullFrame/FullFrame';
import Slices from './slices/slices';
import Styled from './style';

const CaseStudy = ({ data }) => {
  const { deliverables } = data.data;
  const title = RichText.asText(data.data.title);
  const description = RichText.asText(data.data.description);
  return (
  <>
    <CaseStudy.Cover {...{ title, description, deliverables }} />
    <Slices modules={data.data.cs_content} title={RichText.asText(data.data.title)} />
  </>
  );
};

CaseStudy.Cover = ({ description, deliverables, title }) => (
  <FullFrame context>
    <Styled.Cover>
      <Styled.TitleWrapper pose="enter" initialPose="exit">
        <h1>{title}</h1>
      </Styled.TitleWrapper>
      <Styled.Info pose="enter" initialPose="exit">
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
