import { useContext } from "react"
import { DataCtx } from "pages/_app"
import Cookies from "js-cookie"
import { DEFAULT_CTX } from "../constants"

const useCurrentCuration = (uid: string = DEFAULT_CTX) => {
  const { ctxRes, curationId } = useContext(DataCtx)
  const selectedCuration = curationId || uid

  const currentCtx = ctxRes.results.filter(
    item => item.uid === selectedCuration
  )[0]

  return currentCtx
}

export const useCurationUids = (uid?: string) => {
  const currentCuration = useCurrentCuration(uid)

  const uids = currentCuration.data.case_study_list.map(
    item => item.case_study_item.uid
  )

  return uids
}

export const useIndexFromUid = (uid: string) => {
  const uids = useCurationUids()
  return uids.indexOf(uid)
}

export default useCurrentCuration
