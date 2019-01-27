import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import Slices from './slices/slices';
import Styled from './style';

const CaseStudy = ({ data }) => (
  <>
    <ContextFrame>
      <Styled.Cover>
        <Styled.TitleWrapper pose="enter" initialPose="exit">
          <h1>{RichText.asText(data.data.title)}</h1>
        </Styled.TitleWrapper>
        <Styled.Info pose="enter" initialPose="exit">
          <Styled.Deliverables>
            {data.data.deliverables}
          </Styled.Deliverables>
          <Styled.Description>
            {RichText.asText(data.data.description)}
          </Styled.Description>
        </Styled.Info>
      </Styled.Cover>
    </ContextFrame>
    <Slices modules={data.data.cs_content} title={RichText.asText(data.data.title)} />
  </>
);

export default React.memo(CaseStudy);
