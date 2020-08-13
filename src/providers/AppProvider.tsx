import React, { createContext } from 'react'
import { CsContext } from 'types'

type CtxReturn = {
  context: CsContext
}

export const AppCtx = createContext<CtxReturn>({} as CtxReturn)

const CaseStudyProvider: React.FC<{ contexts: CsContext[] }> = ({
  contexts,
  children,
}) => {
  const getContextById = (id: string) =>
    contexts.filter(ctx => ctx.slug.current === id)[0]

  return (
    <AppCtx.Provider value={{ context: getContextById('default') }}>
      {children}
    </AppCtx.Provider>
  )
}

export default CaseStudyProvider
