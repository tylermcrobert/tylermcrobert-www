import timeFromMs from "util/timeFromMs"
import { ISpotifyPlaylist, ISpotifyPlaylistTrack } from "templates/playlist"

import { IParsedTrack } from "./Playlist"

const useParsed = (data: ISpotifyPlaylist) => {
  const tracks: IParsedTrack[] = data.tracks.items.map(item => {
    return {
      title: item.track.name,
      artist: item.track.artists.map(artist => artist.name).join(" & "),
      duration: timeFromMs(item.track.duration_ms),
    }
  })

  const totalDurationMs = data.tracks.items.reduce(
    (acc: number, cur) => cur.track.duration_ms + acc,
    0
  )
  const totalDuration = timeFromMs(totalDurationMs)

  const img = data.images[0].url

  const dateCreated = data.tracks.items
    .reduce((acc: Date, cur: ISpotifyPlaylistTrack) => {
      const date = new Date(cur.added_at)
      return acc > date ? date : acc
    }, new Date())
    .toISOString()
    .split(".")[0]

  return { totalDuration, tracks, img, dateCreated }
}

export default useParsed
