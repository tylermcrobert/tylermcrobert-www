import React from "react"
import { Link } from "gatsby"
import { LargeHead, Grid, DotHead, Wrapper, Section } from "components"
import { useNowPlaying } from "hooks"
import { IParsedPlaylist } from "types/spotify"
import S from "./Info.Styled"
import { UNICODE } from "../../constants"

const { RIGHT } = UNICODE

interface IProps {
  clients: string[]
  playlists: IParsedPlaylist[]
}

const Info: React.FC<IProps> = ({ clients, playlists }) => {
  return (
    <>
      <S.Info>
        <Intro />
        <Section>
          <Grid>
            <Contact />
            <S.Copy>
              <DotHead>Clients</DotHead>
              <S.TwoCol>
                {clients.map(client => (
                  <div key={client}>{client}</div>
                ))}
              </S.TwoCol>
            </S.Copy>
          </Grid>
        </Section>
      </S.Info>

      <S.Hr />

      <S.Info>
        <Section>
          <Music playlists={playlists} />
        </Section>
      </S.Info>
    </>
  )
}

const Intro = () => {
  return (
    <Section>
      <Wrapper>
        <DotHead>Bio</DotHead>
        <LargeHead>
          I&apos;m Tyler McRobert, a Midwest–born designer &amp; web developer
          living in Portland, Oregon. I work hard to create beautiful, impactful
          work with meaning. I&apos;m currently taking over the world at{" "}
          <a href="http://this.design">This.</a>
        </LargeHead>
      </Wrapper>
    </Section>
  )
}

const Contact = () => (
  <S.Copy>
    <div>
      &#9679; E-M→{" "}
      <a href="mailto:hello@tylermcrobert.com">hello@tylermcrobert.com</a>
    </div>
    <div>
      &#9679; IG→{" "}
      <a href="http://instagram.com/tylermcrobert">@tylermcrobert</a>{" "}
    </div>
  </S.Copy>
)

interface IMusicProps {
  playlists: IParsedPlaylist[]
}

const Music: React.FC<IMusicProps> = ({ playlists }) => {
  const { loading, artist, trackName } = useNowPlaying()

  return (
    <>
      <Wrapper>
        <DotHead>Now Playing</DotHead>

        <LargeHead>
          {!loading && (
            <>
              Right now I&apos;m listening to:&nbsp;“{trackName}” by {artist} on
              Spotify.
            </>
          )}
        </LargeHead>

        <br />
        <br />

        <DotHead>Playlists</DotHead>
      </Wrapper>

      {playlists.map(({ totalDuration, dateCreated, name }) => (
        <S.PlaylistWrapper key={totalDuration}>
          <div>{name}</div>
          <div>{dateCreated}</div>
          <div>{totalDuration}</div>
          <div>{RIGHT}</div>
        </S.PlaylistWrapper>
      ))}

      <br />

      <Wrapper>
        <Link to="/playlist">See All Playlists</Link> {RIGHT}
      </Wrapper>
    </>
  )
}

export default Info
