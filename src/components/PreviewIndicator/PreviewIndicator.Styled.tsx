import styled from 'styled-components'
import { size } from 'style'

const Wrapper = styled.div`
  background: orange;
  font-size: ${size[-1]};
  padding: ${size[-2]};
  margin: ${size[-2]};
  position: fixed;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
`

export default {
  Wrapper,
}
