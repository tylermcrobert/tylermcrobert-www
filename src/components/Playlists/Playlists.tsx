import React, { useState } from 'react'
import { IParsedPlaylist, IParsedTrack } from 'types'
import { Wrapper, LargeHead } from 'components'
import { UNICODE } from '../../constants'
import S from './Playlists.Styled'

interface IProps {
  data: IParsedPlaylist[]
}

const Playlists: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      {data.map(pl => (
        <Playlist data={pl} key={pl.name} />
      ))}
    </div>
  )
}

interface IPlaylist {
  data: IParsedPlaylist
}

const LIMIT = 5
const { CIRCLE, NE, NUMBERS, DOWN, UP } = UNICODE

const Playlist: React.FC<IPlaylist> = ({ data }) => {
  const { totalDuration, tracks, img, dateCreated, link } = data
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
            <a href={link} target="_blank" rel="noopener noreferrer">
              {CIRCLE} LINK {NE}
            </a>
          </S.MetadataItem>
        </S.Metadata>

        <Wrapper>
          <S.TracksWrapper>
            {limitedTracks.map(({ title, artist, duration }, i) => {
              return (
                <Track
                  key={title}
                  number={NUMBERS[i + 1]}
                  title={title}
                  artist={artist}
                  duration={duration}
                />
              )
            })}
          </S.TracksWrapper>
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
      {number} {title}—{artist} ({duration}){' '}
    </span>
  )
}

export default Playlists
