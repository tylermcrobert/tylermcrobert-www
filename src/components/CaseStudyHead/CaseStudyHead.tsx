import React from 'react'
import { useCaseStudy } from 'hooks'

const CaseStudyHead = () => {
  const caseStudy = useCaseStudy()

  return (
    <>
      <h1>{caseStudy.title}</h1>
      <h2>{caseStudy.intro}</h2>
      <p>{caseStudy.date.split('.')[0]}</p>
    </>
  )
}

export default CaseStudyHead
