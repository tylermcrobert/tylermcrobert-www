import React from "react"
import PlaylistTemplate from "pageTemplates/Playlists/Playlists"
import { Layout, Seo } from "components"
import { ISpotifyPlaylist } from "types/spotify"

interface IProps {
  pageContext: {
    data: ISpotifyPlaylist[]
  }
}

const Playlist: React.FC<IProps> = ({ pageContext }) => {
  return (
    <Layout>
      <Seo title={null} />
      <PlaylistTemplate data={pageContext.data} />
    </Layout>
  )
}

export default Playlist
