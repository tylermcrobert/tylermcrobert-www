/* eslint-disable no-underscore-dangle */
import React from "react"
import { CtxLink, LargeHead, Html } from "components"
// eslint-disable-next-line no-unused-vars
import { IPrismicContext } from "templates/homepage"
import { NUMBERS } from "../../constants"
import S from "./Homepage.Styled"

const { RichText } = require("prismic-reactjs")

interface IProps {
  data: IPrismicContext
}

const Homepage: React.FC<IProps> = ({ data }) => {
  const items = data.prismic.context.case_study_list
    .map(cs => cs.case_study_item)
    .map(cs => ({ uid: cs._meta.uid, title: RichText.asText(cs.title) }))

  return (
    <S.Wrapper>
      <ul>
        {items.map(({ title, uid }, i) => (
          <li key={title}>
            <LargeHead>
              {" "}
              <Html>{NUMBERS[i]}</Html>&nbsp;
              <CtxLink to={`/${uid}`}>{title}</CtxLink>
            </LargeHead>
          </li>
        ))}
      </ul>
    </S.Wrapper>
  )
}

export default Homepage
