import styled from 'styled-components'
import Wrapper from 'components/Wrapper/Wrapper'
import { size } from 'style'

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${size.gutter};

  > * {
    grid-column: span 6;
  }
`

export default Grid
