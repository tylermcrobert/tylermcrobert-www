import React from "react"
import { RichText } from "util/richText"
import { IText } from "types/Prismic"
import S from "./Text.Styled"

interface IProps {
  data: IText
}

const Text: React.FC<IProps> = ({ data }) => {
  return (
    <S.Text>
      <RichText>{data.primary.paragraph}</RichText>
    </S.Text>
  )
}

export default Text
