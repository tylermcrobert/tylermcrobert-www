import React from "react"
import { DotHead, Grid, LargeHead } from "components"
import { IInfoRes } from "types/Prismic"
import { RichText } from "util/richText"
import useNowPlaying from "hooks/useNowPlaying"
import S from "./Info.Styled"

const Info: React.FC<{ data: IInfoRes }> = ({ data: res }) => {
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
        <FeaturedPlaylists />
      </S.LgSection>
    </>
  )
}

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

const FeaturedPlaylists = () => {
  return (
    <S.Section>
      <div>
        <div>
          <DotHead>Featured Playlists</DotHead>
        </div>
        playlists
      </div>
    </S.Section>
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

export default Info
