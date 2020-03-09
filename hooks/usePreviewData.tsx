import { useState, useEffect } from "react"

const usePreviewData = (cb: () => Promise, initialData) => {
  if (initialData) return initialData

  const [pageData, setPageData] = useState()

  useEffect(() => {
    cb().then(data => setPageData(data))
  }, [])

  return pageData
}
export default usePreviewData
