import styled from 'styled-components'
import { colors, zIndex } from 'style'

const Nav = styled.nav`
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  left: 0;

  mix-blend-mode: difference;
  z-index: ${zIndex.previewIndicator};
  width: 100%;

  color: ${colors.secondary};

  a {
    color: ${colors.secondary};
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
