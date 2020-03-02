import styled from "styled-components"
import { Grid } from "components"
import { mq } from "style"
import theme from "style/theme"

const LgSection = styled.div`
  margin: 5rem auto;
`

const Section = styled(Grid)`
  margin: ${props => props.theme.remScale[6]} auto;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ul {
    column-count: 2;
    column-gap: ${props => props.theme.margins.standard};
  }

  a {
    text-decoration: underline;
  }
`

const TwoCol = styled.div`
  @media ${mq.sm} {
    grid-column: span 3;
  }
`

const Hr = styled.hr`
  border: 0;
  border-bottom: 1px dashed ${props => props.theme.colors.primary};
`

const PlaylistWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: ${theme.sizes.sm - 1}px) {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    > * {
      &:nth-child(3) {
        grid-row: 1;
        grid-column: 2;
      }

      &:nth-child(4),
      &:nth-child(2) {
        display: none;
      }
    }
  }

  @media ${mq.sm} {
    grid-template-columns: repeat(6, 1fr);

    * {
      &:nth-child(1),
      &:nth-child(2) {
        grid-column: span 2;
      }

      &:nth-child(4) {
        text-align: right;
      }
    }
  }
`
export default {
  Hr,
  LgSection,
  Section,
  TwoCol,
  PlaylistWrapper,
}
