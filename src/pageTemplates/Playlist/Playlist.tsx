import React from "react"
import { ISpotifyPlaylist } from "templates/playlist"
import { Wrapper, LargeHead, Html, Grid } from "components"
import timeFromMs from "util/timeFromMs"
import { NUMBERS } from "../../constants"
import S from "./Playlist.Styled"

interface IProps {
  data: ISpotifyPlaylist
}
const Playlist: React.FC<IProps> = ({ data }) => {
  const tracks = data.tracks.items.map(item => {
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

  return (
    <div>
      <S.Playlist>
        <S.Metadata>
          <S.MetadataItem>
            ● {data.name} ({totalDuration})
          </S.MetadataItem>
          <S.MetadataItem>● Link ↗</S.MetadataItem>
        </S.Metadata>
        <Wrapper>
          <LargeHead>
            {tracks.map(({ title, artist, duration }, i) => {
              const digits = i
                .toString()
                .split("")
                .map(Number)

              const number = digits.map(digit => NUMBERS[digit]).join("")

              return (
                <span>
                  <Html>{number}</Html> {title} → {artist} ({duration}){" "}
                </span>
              )
            })}
          </LargeHead>
        </Wrapper>
      </S.Playlist>
    </div>
  )
}

export default Playlist
