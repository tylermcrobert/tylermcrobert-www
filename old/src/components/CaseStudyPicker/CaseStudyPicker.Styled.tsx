import styled from "styled-components"
import { Wrapper as GlobalWrapper } from "components"

const Fixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: grid;
  align-items: center;
`

const Wrapper = styled(GlobalWrapper)`
  padding-top: ${props => props.theme.margins.large};
  padding-bottom: ${props => props.theme.margins.large};
  width: 100%;

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
  Fixed,
  Wrapper,
  PageWrapper,
  FixedPicker,
  PickerWrapper,
}
