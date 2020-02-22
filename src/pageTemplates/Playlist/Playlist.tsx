import React from "react"
import { ISpotifyPlaylist } from "templates/playlist"
import { Wrapper, LargeHead, Html } from "components"
import { NUMBERS } from "../../constants"

interface IProps {
  data: ISpotifyPlaylist
}
const Playlist: React.FC<IProps> = ({ data }) => {
  const tracks = data.tracks.items.map(item => {
    return {
      title: item.track.name,
      artist: item.track.artists.map(artist => artist.name).join(" & "),
      duration: "",
    }
  })

  // const totalDuration = data.tracks.items.reduce(
  //   (acc: number, cur) => cur.track.duration_ms + acc,
  //   0
  // )

  return (
    <div>
      <br />
      <br /> <br />
      <br /> <br />
      <br />
      <Wrapper>
        ● {data.name}
        <br />
        <br />
        <LargeHead>
          {tracks.map(({ title, artist, duration }, i) => {
            const digits = i
              .toString()
              .split("")
              .map(Number)

            const number = digits.map(digit => NUMBERS[digit]).join("")

            return (
              <span>
                <Html>{number}</Html> {title} → {artist}{" "}
              </span>
            )
          })}
        </LargeHead>
      </Wrapper>
    </div>
  )
}

export default Playlist
