import React, { createContext } from 'react'
import { CaseStudyType } from 'types'

export const CaseStudyContext = createContext<CaseStudyType>(
  {} as CaseStudyType
)

const CaseStudyProvider: React.FC<{ data: CaseStudyType }> = ({
  data,
  children,
}) => {
  return (
    <CaseStudyContext.Provider value={data}>
      {children}
    </CaseStudyContext.Provider>
  )
}

export default CaseStudyProvider
