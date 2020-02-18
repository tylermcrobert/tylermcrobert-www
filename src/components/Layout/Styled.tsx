import styled from "styled-components"

const Nav = styled.div`
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  left: 0;

  mix-blend-mode: difference;
  z-index: 30;
  width: 100%;

  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`

const LogoArea = styled.div`
  grid-column: span 5;
`

const ContextArea = styled.span`
  cursor: pointer;
  span {
    white-space: nowrap;
  }
`

const Link = styled.div`
  text-align: right;
`

export default {
  LogoArea,
  Nav,
  ContextArea,
  Link,
}
