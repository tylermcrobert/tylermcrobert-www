import styled from "styled-components"
import { Wrapper as GlobalWrapper } from "components"

const Wrapper = styled(GlobalWrapper)`
  width: 100%;
  word-break: break-word;
  margin-top: ${props => props.theme.margins.large};

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
