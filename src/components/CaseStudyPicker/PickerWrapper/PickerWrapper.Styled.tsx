import styled from "styled-components"

const Wrapper = styled.div`
  border-bottom: 1px dashed ${props => props.theme.colors.primary};
  margin-bottom: 100vh;
  position: relative;
  z-index: 20;
  background: ${props => props.theme.colors.secondary};
`

export default {
  Wrapper,
}
