import { useContext } from "react"
import { DataCtx } from "pages/_app"

const useCurrentCuration = () => {
  const { ctxRes, currentCtxUid } = useContext(DataCtx)

  const currentCtx = ctxRes.results.filter(
    item => item.uid === currentCtxUid
  )[0]

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
