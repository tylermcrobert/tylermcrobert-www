import styled from 'styled-components'
import { Wrapper } from 'components'
import { size } from 'style'

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${size.gutter};
  margin: ${size.gutter} auto;
  > * {
    grid-column: span 6;
  }
`

export default Grid
