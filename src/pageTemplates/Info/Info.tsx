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
  const { loading, artist, trackName } = useNowPlaying()

  return (
    <>
      <S.Wrapper>
        <Grid>
          <S.Intro>
            <DotHead>Bio</DotHead>
            <LargeHead>
              I&apos;m Tyler McRobert, a Midwest–born Designer &amp; Web
              Developer living in Portland, Oregon. Currently taking over the
              world at <a href="http://this.design">This.</a>
            </LargeHead>
          </S.Intro>

          <S.Copy>
            <DotHead>Clients</DotHead>
            <S.TwoCol>
              {clients.map(client => (
                <p key={client}>{client}</p>
              ))}
            </S.TwoCol>
          </S.Copy>

          <S.Copy>
            <p>
              &#9679; E-M→{" "}
              <a href="mailto:hello@tylermcrobert.com">
                hello@tylermcrobert.com
              </a>
            </p>
            <p>
              &#9679; IG→{" "}
              <a href="http://instagram.com/tylermcrobert">@tylermcrobert</a>{" "}
            </p>
          </S.Copy>

          <S.Intro>
            <LargeHead>
              {!loading && (
                <>
                  I&apos;m currently listening to “{trackName}” by {artist} on
                  Spotify.
                </>
              )}{" "}
              Check out some <Link to="/playlist">playlists</Link>&nbsp;{RIGHT}.
            </LargeHead>
          </S.Intro>
        </Grid>
      </S.Wrapper>
    </>
  )
}

export default Info
