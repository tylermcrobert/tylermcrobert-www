import React, { createContext, useContext } from "react"
import { StaticQuery } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import curationQuery from "./curationQuery"

import { ICtxProviderData } from "./types"

const CurationCtx = createContext({})

const DataWrappedContextProvider = ({ ...props }) => {
  return (
    <StaticQuery
      query={curationQuery}
      render={withPreview((data: ICtxProviderData) => {
        return <ContextProvider data={data} {...props} />
      }, curationQuery)}
    />
  )
}

interface IContextProviderProps {
  data: ICtxProviderData
}

const ContextProvider: React.FC<IContextProviderProps> = ({
  children,
  data,
}) => {
  console.log(data)

  return (
    <CurationCtx.Provider value={{ foo: "bar" }}>
      {children}
    </CurationCtx.Provider>
  )
}

export const CurationProvider = DataWrappedContextProvider

export const useCuration = () => useContext(CurationCtx)
