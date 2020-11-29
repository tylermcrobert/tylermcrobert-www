import styled from 'styled-components'
import { Grid, LargeHead } from 'components'
import { mq, size, responsiveSizes } from 'style'

const Playlist = styled.div`
  margin-top: ${size.gutter};
  @media ${mq.xs} {
    margin-top: ${size[4]};
  }
  @media ${mq.md} {
    margin-top: ${size.large};
  }
`

const Metadata = styled(Grid)`
  margin-bottom: ${size.gutter};
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
  @media (max-width: ${responsiveSizes.xs}px) {
    font-size: ${size[1]};
  }
`

export default {
  Playlist,
  MetadataItem,
  Metadata,
  TitleBlock,
  TracksWrapper,
}
