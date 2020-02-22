import React from "react"
import PlaylistTemplate from "pageTemplates/Playlist/Playlist"
import { Layout, Seo } from "components"

interface ISpotifyArtist {
  name: string
}

interface ISpotifyTrack {
  name: string
  artists: ISpotifyArtist[]
  duration_ms: number
}

interface ISpotifyPlaylistTrack {
  track: ISpotifyTrack
}

export interface ISpotifyPlaylist {
  external_urls: {
    spotify: string
  }
  name: string
  tracks: {
    items: ISpotifyPlaylistTrack[]
  }
}

interface IProps {
  pageContext: {
    data: ISpotifyPlaylist
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
