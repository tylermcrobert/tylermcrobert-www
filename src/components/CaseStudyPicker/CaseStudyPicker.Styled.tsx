import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;

  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: grid;
  align-items: center;

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
  padding-top: ${props => props.theme.margins.large};
  padding-bottom: ${props => props.theme.margins.large};

  max-width: 60rem;
`

export default {
  Wrapper,
  Content,
}
