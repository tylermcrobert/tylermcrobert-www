import { useContext } from 'react'
import { CaseStudyContext } from 'providers/CaseStudyProvider'

export const useCaseStudy = () => useContext(CaseStudyContext)
