import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';


export const AnimateIn = posed.li(({ i }) => {
  const delay = i * 60;
  const transition = {
    duration: 700,
    ease: 'circOut',
  };
  return ({
    out: {
      opacity: 0, scale: 0.75, y: '1em', ...{ delay }, ...transition,
    },
    in: {
      opacity: 1, scale: 1, y: 0, ...{ delay }, ...{ transition },
    },
  });
});

export const ListItem = styled(AnimateIn)`
  cursor: pointer;
  text-align: center;
  transition: color 0.8s ease 0s;
  font-size: 1.618em;
`;

export const ListLink = styled(Link)`
  transition: color 900ms ease;
  color: ${({ theme }) => theme.color.light};
  line-height:2;

  &:hover {
    transition: color 100ms ease;
    color: ${({ theme }) => theme.color.main};
  }
`;
