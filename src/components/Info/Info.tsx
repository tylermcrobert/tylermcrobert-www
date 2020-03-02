import React from "react"
import { DotHead, Grid, LargeHead } from "components"
import { IInfoRes } from "types/Prismic"
import { RichText } from "util/richText"
import useNowPlaying from "hooks/useNowPlaying"
import { IParsedPlaylist } from "types/SpotifyPlaylist"
import Link from "next/link"
import S from "./Info.Styled"
import { NUMBERS, UNICODE } from "../../constants"

const Info: React.FC<{
  data: IInfoRes
  playlistData: IParsedPlaylist[]
}> = ({ data: res, playlistData }) => {
  const { clients, introduction } = res.results[0].data

  return (
    <>
      <S.LgSection>
        <S.Section>
          <div>
            <DotHead>Bio</DotHead>
            <LargeHead>
              <RichText>{introduction}</RichText>
            </LargeHead>
          </div>
        </S.Section>
        <S.Section>
          <Contact />
          <S.TwoCol>
            <DotHead>Clients</DotHead>
            <ul>
              {clients.split(/\n/).map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </S.TwoCol>
        </S.Section>
      </S.LgSection>
      <S.Hr />
      <S.LgSection>
        <Music />
        <FeaturedPlaylists data={playlistData} />
      </S.LgSection>
    </>
  )
}

const Contact = () => (
  <S.TwoCol>
    <div>
      &#9679; E-M→{" "}
      <a href="mailto:hello@tylermcrobert.com">hello@tylermcrobert.com</a>
    </div>
    <div>
      &#9679; IG→{" "}
      <a href="http://instagram.com/tylermcrobert">@tylermcrobert</a>{" "}
    </div>
  </S.TwoCol>
)

const Music = () => {
  const { loading, artist, trackName, nowPlaying } = useNowPlaying()

  return (
    <S.Section>
      <div>
        {!loading && !!artist && (
          <>
            <DotHead>{nowPlaying ? "Now Playing" : "Recently Played"}</DotHead>
            <LargeHead>
              {nowPlaying ? (
                <>
                  Right now I&apos;m listening to:&nbsp;“{trackName}” by{" "}
                  {artist} on Spotify.
                </>
              ) : (
                <>
                  The last song I listened to on Spotify was &nbsp;“{trackName}”
                  by {artist}.
                </>
              )}
            </LargeHead>
          </>
        )}
      </div>
    </S.Section>
  )
}

const FeaturedPlaylists: React.FC<{
  data: IParsedPlaylist[]
}> = ({ data }) => {
  return (
    <S.Section>
      <div>
        <div>
          <DotHead>Featured Playlists</DotHead>
        </div>

        {data.map((item, i) => (
          <S.PlaylistWrapper key={item.name}>
            <p>
              {NUMBERS[i + 1]} {item.name}
            </p>
            <p>{item.dateCreated}</p>
            <p>{item.totalDuration}</p>
            <p> {UNICODE.RIGHT}</p>
          </S.PlaylistWrapper>
        ))}
      </div>
      <Link href="/playlists">
        <a>See all playlists {UNICODE.RIGHT}</a>
      </Link>
    </S.Section>
  )
}

export default Info
