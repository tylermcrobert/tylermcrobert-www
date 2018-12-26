import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import Slices from './slices/slices';

const CaseStudy = ({ data }) => (
  <>
    <ContextFrame>
      <Cover>
        <TitleWrapper>
          <h1>{RichText.asText(data.data.title)}</h1>
        </TitleWrapper>
        <Info>
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

const Info = styled.div`
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

const TitleWrapper = styled.div`
  font-size: calc(2.023em + 1vw);
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CaseStudy;
