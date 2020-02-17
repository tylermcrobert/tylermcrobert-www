import React, { createContext, useContext } from "react"
import { ICtxProviderData } from "./types"
import parseData from "./parseData"
import DataWrappedContextProvider from "./DataWrapper"
import { DEFAULT_CTX } from "../../constants"

export type CaseStudyInfo = {
  uid: string
  title: string
}

export type CtxItem = {
  uid: string
  caseStudies: CaseStudyInfo[]
}

const CurationCtx = createContext<{
  currentCtx: CtxItem
  contexts: CtxItem[]
}>({
  contexts: [],
  currentCtx: {
    uid: "",
    caseStudies: [],
  },
})

interface IContextProviderProps {
  data: ICtxProviderData
  selectedCtxUid?: string
}

export const ContextProvider: React.FC<IContextProviderProps> = ({
  children,
  data,
  selectedCtxUid = DEFAULT_CTX,
}) => {
  const parsedData = parseData(data, selectedCtxUid)

  return (
    <CurationCtx.Provider value={parsedData}>{children}</CurationCtx.Provider>
  )
}

export const CurationProvider = DataWrappedContextProvider

export const useCuration = () => useContext(CurationCtx)
