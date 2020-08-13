import { useState, useEffect } from 'react'
import { getClient } from 'lib/api'
/**
 * Use preview
 */

/**
 * Hook to get the most recent draft data
 * @param query Sanity GROQ query used for page query
 * @param inputData Initial data from getInitialProps / getStaticProps
 * @param isPreview Is document being previewed
 */
function usePreview<T>(query: string, inputData: T, isPreview: boolean) {
  const [previewData, setPreviewData] = useState<T>(inputData)

  useEffect(() => {
    if (isPreview) {
      const subscription = getClient(isPreview)
        .listen(query)
        .subscribe(event => {
          if (event.result && event.result._id.startsWith('drafts.')) {
            setPreviewData(event.result as T)
          }
        })

      return () => {
        subscription.unsubscribe()
      }
    }
  }, [query, isPreview])

  return isPreview ? previewData : inputData
}

export default usePreview
