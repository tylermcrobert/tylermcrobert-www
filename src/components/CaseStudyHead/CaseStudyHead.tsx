import React from 'react'
import { useCaseStudy } from 'hooks'
import { LargeHead, SanityBlockContent } from 'components'
import { NUMBERS, UNICODE } from '../../constants'
import S from './CaseStudyHead.Styled'

const CS_INDEX = 0
const CaseStudyHead = () => {
  const { title, intro, date, deliverables, description } = useCaseStudy()
  const index = CS_INDEX

  return (
    <S.Intro>
      <h1>
        {NUMBERS[index + 1]} {title}
      </h1>
      <LargeHead as="h2">{intro}</LargeHead>
      <S.Deliverables>
        <p>{date.split('.')[0]}</p>
        <p>{deliverables.join(` ${UNICODE.CIRCLE}${UNICODE.NBSP}`)}</p>
      </S.Deliverables>
      <S.Desc>
        <SanityBlockContent blocks={description} />
      </S.Desc>
    </S.Intro>
  )
}

export default CaseStudyHead
