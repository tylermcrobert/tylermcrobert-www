import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
import { eases, durations } from 'containers/App/styled';

const Styled = {};
const Posed = {};

const transition = { ease: eases.standard, duration: durations.slow };

Posed.AnimateIn = posed.li(({ i }) => {
  const delay = (i * (durations.slow / 20));
  return ({
    enter: {
      opacity: 1, scale: 1, y: 0, delay, transition,
    },
    preEnter: {
      opacity: 0, scale: 0.8, y: '1em', transition, delay,
    },
    exit: { opacity: 0 },
  });
});


export const ZoomIn = posed.div({
  enter: { scale: 1, transition },
  exit: { scale: 0.95, transition },
});


Styled.ListItem = styled(Posed.AnimateIn)`
  cursor: pointer;
  text-align: center;
  transition: color 0.8s ease 0s;
  font-size: 1.618em;
`;

Styled.ListLink = styled(Link)`
  transition: color 900ms ease;
  color: ${({ theme }) => theme.color.light};
  line-height:2;

  &:hover {
    transition: color 100ms ease;
    color: ${({ theme }) => theme.color.main};
  }
`;

export default Styled;
