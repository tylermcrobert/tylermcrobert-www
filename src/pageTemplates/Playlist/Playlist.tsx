import React from "react"
import { ISpotifyPlaylist } from "templates/playlist"
import { Wrapper, LargeHead } from "components"
import { NUMBERS } from "../../constants"
import S from "./Playlist.Styled"
import useParsed from "./useParsed"

interface IProps {
  data: ISpotifyPlaylist
}

export interface IParsedTrack {
  title: string
  artist: string
  duration: string
}

const Playlist: React.FC<IProps> = ({ data }) => {
  const { totalDuration, tracks } = useParsed(data)

  return (
    <div>
      <S.Playlist>
        <S.Metadata>
          <S.MetadataItem>{/* <img src={img} alt="" /> */}</S.MetadataItem>
          <S.MetadataItem>
            ● {data.name} ({totalDuration})
          </S.MetadataItem>
          <S.MetadataItem>● Link ↗</S.MetadataItem>
        </S.Metadata>
        <Wrapper>
          <LargeHead>
            {tracks.map(({ title, artist, duration }, i) => {
              return (
                <Track
                  number={NUMBERS[i + 1]}
                  title={title}
                  artist={artist}
                  duration={duration}
                />
              )
            })}
          </LargeHead>
        </Wrapper>
      </S.Playlist>
    </div>
  )
}

interface ITrackProps extends IParsedTrack {
  number: string
}

const Track: React.FC<ITrackProps> = ({ number, title, artist, duration }) => {
  return (
    <span>
      {number} {title} → {artist} ({duration}){" "}
    </span>
  )
}

export default Playlist
