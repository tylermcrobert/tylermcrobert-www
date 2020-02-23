import React from "react"
import { Link } from "gatsby"
import { LargeHead, Grid, DotHead } from "components"
import { useNowPlaying } from "hooks"
import S from "./Info.Styled"
import { UNICODE } from "../../constants"

const { CIRCLE, RIGHT } = UNICODE

interface IProps {
  clients: string[]
}

const Info: React.FC<IProps> = ({ clients }) => {
  return (
    <>
      <S.Wrapper>
        <Grid>
          <Intro />

          <Contact />
          <S.Copy>
            <DotHead>Clients</DotHead>
            <S.TwoCol>
              {clients.map(client => (
                <div key={client}>{client}</div>
              ))}
            </S.TwoCol>
          </S.Copy>
          <Music />
        </Grid>
      </S.Wrapper>
    </>
  )
}

const Intro = () => {
  return (
    <S.Intro>
      <DotHead>Bio</DotHead>
      <LargeHead>
        I&apos;m Tyler McRobert, a Midwest–born Designer &amp; Web Developer
        living in Portland, Oregon. Currently taking over the world at{" "}
        <a href="http://this.design">This.</a>
      </LargeHead>
    </S.Intro>
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

const Music = () => {
  const { loading, artist, trackName } = useNowPlaying()

  return (
    <S.Intro>
      <DotHead>Music</DotHead>
      <LargeHead>
        {!loading && (
          <>
            I&apos;m currently listening to: “{trackName}” by {artist} on
            Spotify.
          </>
        )}{" "}
        Check out some <Link to="/playlist">playlists</Link>&nbsp;{RIGHT}.
      </LargeHead>
    </S.Intro>
  )
}

export default Info
