import React, { useContext } from "react"
import { Html, LargeHead, Paragraph } from "components"
import { NUMBERS } from "../../constants"
import S from "./Header.Styled"
import { CaseStudyContext } from "./CaseStudy"

const Header = () => {
  const { title, index, description, date, deliverables } = useContext(
    CaseStudyContext
  )

  const Index = () => <Html>{NUMBERS[index - 1]}</Html>

  return (
    <S.Wrapper>
      <S.Title>
        <div>
          CS
          <Index />
        </div>
        {title}
      </S.Title>
      <S.Intro>
        <LargeHead>
          Making the case for intentional photography <br />
          in a brand new era.
        </LargeHead>
      </S.Intro>

      <S.Deliverables>
        <p>{date.replace("+0000", "")}</p>
        <Html>{deliverables.join(" &#9679;&nbsp;")}</Html>
      </S.Deliverables>

      <S.Breakdown>
        <Paragraph>{description}</Paragraph>
      </S.Breakdown>
    </S.Wrapper>
  )
}

export default Header
