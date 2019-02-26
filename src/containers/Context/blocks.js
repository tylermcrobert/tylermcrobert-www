import styled from 'styled-components/macro';
import posed from 'react-pose';
import { transitions, durations } from 'containers/App/styled';

const Styled = {};

Styled.Wrapper = styled.div`
  transform: translateZ(0);
`;

Styled.Sideways = styled.div`
  position: absolute;
  top: 0;
  width: 100vh;
  text-align: center;
  line-height: 3em;
  font-size: .81em;
`;

const { exitFast, standard } = transitions;
const PosedSideways = posed.div({
  disabled: { opacity: 0, y: '-1em', transition: exitFast },
  enabled: { opacity: 1, y: '0em', transition: { ...standard, duration: durations.medium } },
});

Styled.Right = styled(Styled.Sideways)`
  transform: rotate(90deg) translate3d(calc(100%), 0, 0);
  transform-origin: right 0;
  right: 0;
`;

Styled.Left = styled(Styled.Sideways)`
  transform-origin: 0% 0%;
  transform-origin: 100 100;
  transform: rotate(-90deg) translate3d(-100%, 0, 0);
  left: 0
`;

export { PosedSideways };
export default Styled;
