import React from "react"
import { Link } from "gatsby"
import { LargeHead, Grid, DotHead, Wrapper, Section } from "components"
import { useNowPlaying } from "hooks"
import S from "./Info.Styled"
import { UNICODE } from "../../constants"

const { RIGHT } = UNICODE

interface IProps {
  clients: string[]
}

const Info: React.FC<IProps> = ({ clients }) => {
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
          <Music />
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

const PLAYLIST_INFO = [
  {
    totalDuration: "0:57:20",
    dateCreated: "2019-06-05T03:42:39",
    name: "Size Twelve",
  },
  {
    totalDuration: "2:00:09",
    dateCreated: "2017-02-05T18:23:32",
    name: "C₂₀H₂₅N₃O",
  },
  {
    totalDuration: "0:36:45",
    dateCreated: "2019-06-01T22:18:11",
    name: "poppy field",
  },
  {
    totalDuration: "0:53:37",
    dateCreated: "2019-07-10T02:06:45",
    name: "Domino",
  },
  {
    totalDuration: "0:87:39",
    dateCreated: "2019-01-05T04:16:56",
    name: "Collarbones",
  },
]

const Music = () => {
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

      {PLAYLIST_INFO.map(({ totalDuration, dateCreated, name }) => (
        <S.PlaylistWrapper>
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
