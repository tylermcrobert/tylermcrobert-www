import React from 'react'
import S from './PreviewIndicator.Styled'

const PreviewIndicator = () => {
  return (
    <S.Wrapper>
      Draft Preview <a href="/api/clear-preview">[X]</a>
    </S.Wrapper>
  )
}

export default PreviewIndicator
