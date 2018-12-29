import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import Slices from './slices/slices';
import { Deliverables, Description, Info, Cover, TitleWrapper } from './style';

const CaseStudy = ({ data }) => (
  <>
    <ContextFrame>
      <Cover>
        <TitleWrapper pose="enter" initialPose="exit">
          <h1>{RichText.asText(data.data.title)}</h1>
        </TitleWrapper>
        <Info pose="enter" initialPose="exit">
          <Deliverables>
            {data.data.deliverables}
          </Deliverables>
          <Description>
            {RichText.asText(data.data.description)}
          </Description>
        </Info>
      </Cover>
    </ContextFrame>
    <Slices modules={data.data.cs_content} title={RichText.asText(data.data.title)} />
  </>
);

export default React.memo(CaseStudy);
