import React from 'react'
import { useCaseStudy } from 'hooks'
import { Grid } from 'components'
import { LargeHead } from 'components/Heading/Heading'

const CaseStudyHead = () => {
  const caseStudy = useCaseStudy()

  return (
    <Grid>
      <h1>{caseStudy.title}</h1>
      <LargeHead as="h2">{caseStudy.intro}</LargeHead>
      <p>{caseStudy.date.split('.')[0]}</p>
    </Grid>
  )
}

export default CaseStudyHead
