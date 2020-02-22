import timeFromMs from "util/timeFromMs"
import { ISpotifyPlaylist } from "templates/playlist"
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

  return { totalDuration, tracks }
}

export default useParsed
