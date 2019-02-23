import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const Styled = {};
const Posed = {};

Posed.AnimateIn = posed.li(({ i }) => {
  const delay = (i * 60) + 200;
  return ({
    enter: {
      opacity: 1, scale: 1, y: 0, delay,
    },
    exit: {
      opacity: 0, scale: 0.75, y: '1em', delay: delay - 200,
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
