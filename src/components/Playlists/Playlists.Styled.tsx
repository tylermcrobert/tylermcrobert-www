import styled from "styled-components"
import { Grid, LargeHead } from "components"
import { mq } from "style"
import theme from "style/theme"

const { sizes } = theme

const Playlist = styled.div`
  margin-top: ${props => props.theme.margins.gutter};
  @media ${mq.xs} {
    margin-top: ${props => props.theme.remScale[6]};
  }
  @media ${mq.md} {
    margin-top: ${props => props.theme.margins.large};
  }
`

const Metadata = styled(Grid)`
  margin-bottom: ${props => props.theme.margins.gutter};
  margin-top: 1rem;
  grid-gap: 0;
`

const MetadataItem = styled.div`
  grid-column: span 6;
  @media ${mq.xs} {
    grid-column: span 2;
  }
`

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  img {
    display: inline-block;
    width: auto;
    height: 1em;
    margin-right: 1rem;
  }
`

const TracksWrapper = styled(LargeHead)`
  @media (max-width: ${sizes.xs}px) {
    font-size: ${props => props.theme.remScale[3]};
  }
`

export default {
  Playlist,
  MetadataItem,
  Metadata,
  TitleBlock,
  TracksWrapper,
}
