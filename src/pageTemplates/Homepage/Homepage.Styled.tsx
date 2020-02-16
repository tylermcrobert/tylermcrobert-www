import styled from "styled-components"
import { Wrapper as GlobalWrapper } from "components"

const Wrapper = styled(GlobalWrapper)`
  width: 100%;
  word-break: break-word;

  li,
  a,
  h1 {
    display: inline;
  }
`

export default {
  Wrapper,
}
