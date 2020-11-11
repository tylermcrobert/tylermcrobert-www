import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: black;
  padding: 7%;

  > * {
    margin: 7%;
    flex: 1;
    overflow: hidden;
    max-width: 15rem;
  }
`

export default {
  Wrapper,
}
