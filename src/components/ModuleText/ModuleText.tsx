import React from 'react'
import S from './ModuleText.Styled'
import { SanityBlockContent } from 'types'

interface IProps {
  data: SanityBlockContent
}

const Text: React.FC<IProps> = () =>
  // { data }
  {
    return (
      <S.Text>{/* <RichText>{data.primary.paragraph}</RichText> */}</S.Text>
    )
  }

export default Text
