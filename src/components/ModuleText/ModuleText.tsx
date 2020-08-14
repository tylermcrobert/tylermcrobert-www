import React from 'react'
import S from './ModuleText.Styled'
import { ModuleText } from 'types'
import { SanityBlockContent } from 'components'

interface IProps {
  data: ModuleText
}

const Text: React.FC<IProps> = ({ data }) => {
  const contents = [
    <S.Text key="1">
      {data.content && <SanityBlockContent blocks={data.content} />}
    </S.Text>,
    <S.Ghost key="2" />,
  ]

  return <>{data.position === 'right' ? [...contents].reverse() : contents}</>
}

export default Text
