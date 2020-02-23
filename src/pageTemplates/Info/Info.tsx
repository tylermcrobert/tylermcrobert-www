import React from "react"
import { LargeHead, Grid } from "components"
import { useNowPlaying } from "hooks"
import S from "./Info.Styled"
import { UNICODE } from "../../constants"

const { CIRCLE } = UNICODE

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
            {CIRCLE} BIO
            <br />
            <br />
            <LargeHead>
              I&apos;m Tyler McRobert, a Midwest–born designer living in
              Portland, Oregon. Currently taking over the world at{" "}
              <a href="http://this.design">This.</a>{" "}
              {!loading && (
                <>
                  I am currently listening to “{trackName}” by {artist} on
                  Spotify.
                </>
              )}
            </LargeHead>
          </S.Intro>

          <S.Copy>
            &#9679; CLIENTS
            <br />
            <br />
            <S.TwoCol>
              {clients.map(client => (
                <p key={client}>{client}</p>
              ))}
            </S.TwoCol>
          </S.Copy>

          <S.Copy>
            <p>
              &#9679; E-M→
              <a href="mailto:hello@tylermcrobert.com">
                hello@tylermcrobert.com
              </a>
            </p>
            <p>
              &#9679; IG→
              <a href="http://instagram.com/tylermcrobert">
                @tylermcrobert
              </a>{" "}
            </p>
          </S.Copy>
        </Grid>
      </S.Wrapper>
    </>
  )
}

export default Info
