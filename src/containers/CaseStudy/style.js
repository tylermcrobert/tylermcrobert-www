import styled from 'styled-components/macro';
import posed from 'react-pose';
import { media } from 'containers/App/styled';

const Styled = {};

const transition = {
  ease: [0, 0.75, 0.2, 0.99],
  duration: 1200,
};

const TitleIn = posed.div({
  enter: { y: 0, opacity: 1, transition },
  exit: { y: '1.25rem', opacity: 0, transition },
});

const InfoIn = posed.div({
  enter: { y: 0, opacity: 1, transition },
  exit: { y: '-1.25rem', opacity: 0, transition },
});

Styled.Cover = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

Styled.InfoItem = styled.p`
  margin: 0px 1em;
`;

Styled.Deliverables = styled(Styled.InfoItem)`
  flex-basis: 30%;
  font-size: .81rem;
  margin-bottom: 1em;
`;

Styled.Description = styled(Styled.InfoItem)`
  flex-basis: 70%;
`;

Styled.Info = styled(InfoIn)`

  ${media.phone`
    display: block;
  `}

  display: flex;
  max-width: 48em;
  flex: 0 1 0%;
  margin: 0px 0px 2.61792em;
`;

Styled.TitleWrapper = styled(TitleIn)`
  font-size: calc(2.023em + 1vw);
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Styled;
