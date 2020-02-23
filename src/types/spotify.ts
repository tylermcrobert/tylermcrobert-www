interface ISpotifyArtist {
  name: string
}

interface ISpotifyTrack {
  name: string
  artists: ISpotifyArtist[]
  duration_ms: number
}

interface ISpotifyPlaylistImage {
  url: string
}

export interface ISpotifyPlaylistTrack {
  track: ISpotifyTrack
  added_at: string
}

export interface ISpotifyPlaylist {
  external_urls: {
    spotify: string
  }
  name: string
  tracks: {
    items: ISpotifyPlaylistTrack[]
  }
  images: ISpotifyPlaylistImage[]
}
