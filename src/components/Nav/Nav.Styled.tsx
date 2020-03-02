import styled from "styled-components"

const Nav = styled.nav`
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

  span {
    cursor: pointer;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export default {
  Content,
  Nav,
}
