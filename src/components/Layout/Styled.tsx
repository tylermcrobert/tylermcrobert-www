import styled from "styled-components"

const Nav = styled.div`
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  mix-blend-mode: difference;

  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`

const LogoArea = styled.div`
  grid-column: span 4;
`

const Link = styled.div`
  text-align: right;
`

export default {
  LogoArea,
  Nav,
  Link,
}
