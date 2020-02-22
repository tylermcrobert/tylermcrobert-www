import styled from "styled-components"
import { Grid } from "components"

const Playlist = styled.div`
  padding-top: ${props => props.theme.margins.large};
`

const Metadata = styled(Grid)`
  margin: ${props => props.theme.margins.gutter} 0;
`

const MetadataItem = styled.div`
  grid-column: span 2;
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

export default {
  Playlist,
  MetadataItem,
  Metadata,
  TitleBlock,
}
