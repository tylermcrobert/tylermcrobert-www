import styled from "styled-components"

const Nav = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secondary};
  padding: 0.5rem 0;

  position: sticky;
  top: 0;
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
