import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import posed from 'react-pose';
import { durations, transitions } from 'containers/App/styled';

const Styled = {};
const Posed = {};

const { standard, exitFast } = transitions;

Posed.AnimateIn = posed.li(({ i }) => {
  const delay = i * (durations.slow / 20);
  return {
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      delay,
      transition: standard,
    },
    preEnter: {
      opacity: 0,
      scale: 0.8,
      y: '1em',
      transition: standard,
      delay,
    },
    exit: { opacity: 0, transition: exitFast },
  };
});

export const ZoomIn = posed.div({
  enter: {
    scale: 1,
    transition: exitFast,
  },
  exit: {
    scale: 0.95,
    transition: exitFast,
  },
});

const active = css`
  color: ${({ theme }) => theme.color.main};
`;

Styled.ListItem = styled(Posed.AnimateIn)`
  cursor: pointer;
  text-align: center;
  transition: color 0.8s ease 0s;
  font-size: 1.618em;

  a {
    transition: color 900ms ease;
    color: ${({ theme }) => theme.color.light};
    ${props =>
      props.active &&
      css`
        ${active}
      `}

    &:hover {
      transition: color 100ms ease;
      ${active}
    }
  }
`;

Styled.ListLink = styled(Link)`
  line-height: 2;
`;

export default Styled;
