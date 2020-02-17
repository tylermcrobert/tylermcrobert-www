import styled from "styled-components"
import { Wrapper as GlobalWrapper } from "components"

const Wrapper = styled(GlobalWrapper)`
  word-break: break-word;
  padding-top: ${props => props.theme.margins.large};
  padding-bottom: ${props => props.theme.margins.large};
  min-height: 100vh;

  li,
  a,
  h1 {
    display: inline;
  }

  a:hover {
    text-decoration: line-through;
  }
`

export default {
  Wrapper,
}
