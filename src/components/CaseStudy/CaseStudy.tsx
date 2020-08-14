import React from 'react'
import { CaseStudyHead, WithCaseStudyPicker, Modules } from 'components'
import S from './CaseStudy.Styled'

const CaseStudy = () => {
  return (
    <WithCaseStudyPicker>
      <S.Wrapper>
        <CaseStudyHead />
        <Modules />
      </S.Wrapper>
    </WithCaseStudyPicker>
  )
}

export default CaseStudy
