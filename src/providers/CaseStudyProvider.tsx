import React, { createContext } from 'react'
import { CaseStudyType } from 'types'

type CtxType = CaseStudyType & { alt: string }

export const CaseStudyContext = createContext<CtxType>({} as CtxType)

const CaseStudyProvider: React.FC<{ data: CaseStudyType }> = ({
  data,
  children,
}) => {
  return (
    <CaseStudyContext.Provider
      value={{ ...data, alt: `${data.title} – Tyler McRobert` }}
    >
      {children}
    </CaseStudyContext.Provider>
  )
}

export default CaseStudyProvider
