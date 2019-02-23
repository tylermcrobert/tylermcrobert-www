import React from 'react';
import { RichText } from 'prismic-reactjs';
import posed from 'react-pose';
import { eases, durations } from 'containers/App/styled';
import PropTypes from 'prop-types';
import FullFrame from 'components/FullFrame/FullFrame';
import Slices from './slices/slices';
import Styled from './style';

const CaseStudy = ({ data }) => {
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

// const transition = {
//   ease: eases.standard,
//   durations: 900,
// };

const Fade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
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
