import styled from "styled-components"
import { Wrapper as GlobalWrapper } from "components"

const Wrapper = styled(GlobalWrapper)`
  word-break: break-word;
  padding-top: ${props => props.theme.margins.large};
  padding-bottom: ${props => props.theme.margins.large};
  min-height: 100vh;

  position: fixed;
  top: 0;
  z-index: 0;
  overflow-y: scroll;

  display: flex;
  align-items: center;

  li,
  a,
  h1 {
    display: inline;
  }

  > div {
    max-width: 60rem;
  }

  a:hover {
    text-decoration: line-through;
  }
`

const PickerWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

const FixedPicker = styled.div``

const PageWrapper = styled.div`
  position: relative;
  z-index: 20;
  background: ${props => props.theme.colors.secondary};
`

export default {
  Wrapper,
  PageWrapper,
  FixedPicker,
  PickerWrapper,
}
