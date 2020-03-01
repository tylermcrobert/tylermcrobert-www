import React from "react"
import { DotHead, Grid, LargeHead } from "components"
import { IInfoRes } from "types/Prismic"
import { RichText } from "util/richText"
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
                <li>{item}</li>
              ))}
            </ul>
          </S.TwoCol>
        </S.Section>
      </S.LgSection>

      <S.Hr />

      <S.LgSection>
        <S.Section>
          <div>
            <DotHead>Recently played</DotHead>
            <LargeHead>
              The last song I listened to on Spotify was “NAGA” by $ilkMoney.
            </LargeHead>
          </div>
        </S.Section>

        <S.Section>
          <DotHead>Featured Playlists</DotHead>
        </S.Section>
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

export default Info
