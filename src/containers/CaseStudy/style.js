import styled from 'styled-components';
import posed from 'react-pose';

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

export const Cover = styled.div`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const InfoItem = styled.p`
  margin: 0px 1em;
`;

export const Deliverables = styled(InfoItem)`
  flex-basis: 30%
  font-size: .81em;
`;

export const Description = styled(InfoItem)`
  flex-basis: 70%;
`;

export const Info = styled(InfoIn)`
  display: flex;
  max-width: 48em;
  flex: 0 1 0%;
  margin: 0px 0px 2.61792em;
`;

export const TitleWrapper = styled(TitleIn)`
  font-size: calc(2.023em + 1vw);
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default null;
