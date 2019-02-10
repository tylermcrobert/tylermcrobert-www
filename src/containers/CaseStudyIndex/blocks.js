import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const Styled = {};
const Posed = {};

Posed.AnimateIn = posed.li(({ i }) => {
  const delay = (i * 60) + 200;
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
