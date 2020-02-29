import { useContext } from "react"
import { DataCtx } from "pages/_app"
import Cookies from "js-cookie"

const useCurrentCuration = () => {
  const { ctxRes } = useContext(DataCtx)
  const curationUid = Cookies.get("curation") || "homepage"
  const currentCtx = ctxRes.results.filter(item => item.uid === curationUid)[0]

  return currentCtx
}

export const useCurationUids = () => {
  const currentCuration = useCurrentCuration()

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
