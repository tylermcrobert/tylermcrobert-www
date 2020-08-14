import React from 'react'
import { useCaseStudy, useApp } from 'hooks'
import { LargeHead, SanityBlockContent } from 'components'
import { NUMBERS, UNICODE } from '../../constants'
import S from './CaseStudyHead.Styled'

const CaseStudyHead = () => {
  const appData = useApp()
  const { title, intro, date, deliverables, description, slug } = useCaseStudy()

  const number =
    appData.context.caseStudies.findIndex(
      cs => cs.slug.current === slug.current
    ) + 1

  return (
    <S.Intro>
      <h1>
        {NUMBERS[number]} {title}
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
