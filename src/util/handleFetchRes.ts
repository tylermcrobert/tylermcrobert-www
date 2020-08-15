/**
 * Handles HTTP responses and returns JSON or error
 * @param res Response object
 * @param error Custom error message
 */

const handleFetch = (res: Response, error: string) => {
  if (!res.ok) {
    throw new Error(`${error} (Response: ${res.status} ${res.statusText})`)
  }
  return res.json()
}

export default handleFetch
