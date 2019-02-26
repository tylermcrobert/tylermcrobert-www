import styled from 'styled-components/macro';
import posed from 'react-pose';
import { poses } from 'containers/App/styled';

const Styled = {};

const TitleIn = posed.div(poses.fadeUp);

Styled.PageContainer = styled(TitleIn)`
  padding: 1rem;
`;

const fontSize = 'calc(.75em + 2vw)';

Styled.Heading = styled.div`
  min-height: 66vh;
  font-size: ${fontSize};
  line-height: 1.4;
  padding: ${fontSize};
  text-indent: calc((.375em + 1vw) * -1);

  display: flex;
  align-items: center;
`;

export default Styled;
