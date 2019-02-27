import posed from 'react-pose';
import styled from 'styled-components/macro';
import { poses } from 'containers/App/styled';

const TitleIn = posed.div(poses.fadeUp);

const Styled = {};

Styled.PageContainer = styled(TitleIn)`
  padding: 1rem;
`;

export default Styled;
