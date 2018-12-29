import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import Slices from './slices/slices';

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


const TitleIn = posed.div(() => {
  const transition = { duration: 400, delay: 200 };
  return ({
    exit: { y: '1.25rem', opacity: 0, ...{ transition } },
    enter: { y: 0, opacity: 1, ...{ transition } },
  });
});

const InfoIn = posed.div(() => {
  const transition = { duration: 400, delay: 200 };
  return ({
    exit: { y: '-1.25rem', opacity: 0, ...{ transition } },
    enter: { y: 0, opacity: 1, ...{ transition } },
  });
});

const InfoItem = styled.p`
  margin: 0px 1em;
`;

const Deliverables = styled(InfoItem)`
  flex-basis: 30%
  font-size: .81em;
`;

const Description = styled(InfoItem)`
  flex-basis: 70%;
`;

const Info = styled(InfoIn)`
  display: flex;
  max-width: 48em;
  flex: 0 1 0%;
  margin: 0px 0px 2.61792em;
`;
const Cover = styled.div`
  /* border: 1px solid blue; */
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TitleWrapper = styled(TitleIn)`
  font-size: calc(2.023em + 1vw);
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default React.memo(CaseStudy);
