import styled from "styled-components"

const Nav = styled.nav`
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  left: 0;

  mix-blend-mode: difference;
  z-index: 30;
  width: 100%;

  border: 1px solid blue;

  color: ${props => props.theme.colors.secondary};

  a {
    color: ${props => props.theme.colors.secondary};
  }
`

export default {
  Nav,
}
