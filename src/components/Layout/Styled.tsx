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

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1rem auto;
  align-items: center;
  grid-gap: 0.2rem;

  * {
    stroke-width: 10;
    color: black;
  }
`

export default {
  LogoWrapper,
  LogoArea,
  Nav,
  Link,
}
