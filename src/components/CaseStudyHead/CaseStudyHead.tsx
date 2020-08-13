import React from 'react'
import { useCaseStudy } from 'hooks'
import { Grid } from 'components'

const CaseStudyHead = () => {
  const caseStudy = useCaseStudy()

  return (
    <Grid>
      <h1>{caseStudy.title}</h1>
      <h2>{caseStudy.intro}</h2>
      <p>{caseStudy.date.split('.')[0]}</p>
    </Grid>
  )
}

export default CaseStudyHead
