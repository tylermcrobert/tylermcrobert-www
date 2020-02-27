import queryString from "query-string"

export type FmType =
  | "gif"
  | "jp2"
  | "jpg"
  | "json"
  | "jxr"
  | "pjpg"
  | "mp4"
  | "png"
  | "png8"
  | "png32"
  | "webm"
  | "webp"

interface SettingsProps {
  w?: string | number
  fm?: FmType
  q?: number
  ar?: number
  fit?:
    | "clamp"
    | "clip"
    | "crop"
    | "facearea"
    | "fill"
    | "fillmax"
    | "max"
    | "min"
}

const DEFAULT_SETTINGS: SettingsProps = { w: 2400, fm: "jpg" }

const getImageSize = (url: string, settings = DEFAULT_SETTINGS): string => {
  const parsedUrl = queryString.parseUrl(url)
  const baseUrl = parsedUrl.url
  const newQuery = queryString.stringify(settings)

  return `${baseUrl}?${newQuery}`
}

export default getImageSize
