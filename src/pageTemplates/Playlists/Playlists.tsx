import React, { useState } from "react"
import { ISpotifyPlaylist } from "templates/playlists"
import { Wrapper, LargeHead } from "components"
import { NUMBERS, UNICODE } from "../../constants"
import S from "./Playlists.Styled"
import useParsed from "./useParsed"

const { UP, DOWN, CIRCLE, NE } = UNICODE

interface IProps {
  data: ISpotifyPlaylist[]
}

export interface IParsedTrack {
  title: string
  artist: string
  duration: string
}

const LIMIT = 5

const Playlists: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      {data.map(pl => (
        <Playlist data={pl} />
      ))}
    </div>
  )
}

interface IPlaylistProps {
  data: ISpotifyPlaylist
}

const Playlist: React.FC<IPlaylistProps> = ({ data }) => {
  const { totalDuration, tracks, img, dateCreated } = useParsed(data)
  const [isLimit, setLimit] = useState<boolean>(true)
  const limitedTracks = isLimit ? [...tracks].slice(0, LIMIT) : tracks

  return (
    <div>
      <S.Playlist>
        <Wrapper>
          <S.TitleBlock>
            <LargeHead>
              <img src={img} alt="" />
            </LargeHead>
            <LargeHead>{data.name}</LargeHead>
          </S.TitleBlock>
        </Wrapper>

        <S.Metadata>
          <S.MetadataItem>
            {CIRCLE} {dateCreated}
          </S.MetadataItem>
          <S.MetadataItem>
            {CIRCLE} DUR {totalDuration}
          </S.MetadataItem>
          <S.MetadataItem>
            {CIRCLE} LINK {NE}
          </S.MetadataItem>
        </S.Metadata>

        <Wrapper>
          <LargeHead>
            {limitedTracks.map(({ title, artist, duration }, i) => {
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

        <S.Metadata>
          <S.MetadataItem>
            {isLimit ? (
              <span onClick={() => setLimit(false)}>
                {CIRCLE} See All {DOWN}
              </span>
            ) : (
              <span onClick={() => setLimit(true)}>
                {CIRCLE} See Less {UP}
              </span>
            )}
          </S.MetadataItem>
        </S.Metadata>
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
      {number} {title}—{artist} ({duration}){" "}
    </span>
  )
}

export default Playlists
