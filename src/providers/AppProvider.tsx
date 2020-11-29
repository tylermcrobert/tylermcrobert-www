import React, { createContext } from 'react'
import { CsContext } from 'types'
import Cookies from 'js-cookie'

type CtxReturn = {
  context: CsContext
}

export const AppCtx = createContext<CtxReturn>({} as CtxReturn)

const CaseStudyProvider: React.FC<{ contexts: CsContext[] }> = ({
  contexts,
  children,
}) => {
  const COOKIE_ID = Cookies.get('ctx-id')

  const getContextById = (id: string) =>
    contexts.filter(ctx => ctx.slug.current === id)[0]

  const defaultCtx = getContextById('default')
  const cookieCtx = COOKIE_ID ? getContextById(COOKIE_ID) : null

  return (
    <AppCtx.Provider
      value={{
        context: cookieCtx || defaultCtx,
      }}
    >
      {children}
    </AppCtx.Provider>
  )
}

export default CaseStudyProvider
