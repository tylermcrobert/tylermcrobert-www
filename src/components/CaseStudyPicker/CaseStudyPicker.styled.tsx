import styled from 'styled-components'
import { size, colors } from 'style'

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: grid;
  align-items: center;
  background: ${colors.secondary};

  li,
  a,
  h1 {
    display: inline;
  }
  a:hover {
    text-decoration: line-through;
  }
`

const Content = styled.div`
  padding-top: ${size.large};
  padding-bottom: ${size.large};
  max-width: 60rem;
`

export default {
  Wrapper,
  Content,
}
