import React from 'react'
import S from './ModuleText.Styled'
import { ModuleText } from 'types'
import { SanityBlockContent } from 'components'

interface IProps {
  data: ModuleText
}

const Text: React.FC<IProps> = ({ data }) => {
  return (
    <S.Text>
      {data.content && <SanityBlockContent blocks={data.content} />}
    </S.Text>
  )
}

export default Text
