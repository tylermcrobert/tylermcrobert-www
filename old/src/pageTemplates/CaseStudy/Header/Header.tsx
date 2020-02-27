import React, { useContext } from "react"
import { Html, LargeHead, Paragraph } from "components"
import { NUMBERS } from "../../../constants"
import S from "./Header.Styled"
import { CaseStudyContext } from "../CaseStudy"

const { RichText } = require("prismic-reactjs")

const Header = () => {
  const { title, index, description, date, intro, deliverables } = useContext(
    CaseStudyContext
  )

  const Index = () => <Html>{NUMBERS[index + 1]}</Html>

  return (
    <S.Wrapper>
      <S.Title>
        <Index /> {title}
      </S.Title>
      <S.Intro>
        <LargeHead>
          <S.IntroWrapper>
            {intro ? (
              RichText.render(intro)
            ) : (
              <div>
                Making the case for intentional photography <br />
                in a new era.
              </div>
            )}
          </S.IntroWrapper>
        </LargeHead>
      </S.Intro>

      <S.Deliverables>
        <p>{date.replace("+0000", "")}</p>
        <Html>{deliverables.join(" &#9679;&nbsp;")}</Html>
      </S.Deliverables>

      <S.Breakdown>
        <Paragraph>{RichText.render(description)}</Paragraph>
      </S.Breakdown>
    </S.Wrapper>
  )
}

export default Header
