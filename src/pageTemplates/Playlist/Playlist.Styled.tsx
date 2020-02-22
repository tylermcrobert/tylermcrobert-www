import styled from "styled-components"
import { Grid } from "components"

const Playlist = styled.div`
  padding-top: ${props => props.theme.margins.large};
`

const Metadata = styled(Grid)`
  margin-bottom: ${props => props.theme.margins.gutter};
`

const MetadataItem = styled.div`
  grid-column: span 2;
`

export default {
  Playlist,
  MetadataItem,
  Metadata,
}
