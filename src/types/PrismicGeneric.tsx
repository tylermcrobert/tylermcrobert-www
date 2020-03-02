type RichTextItem = {
  type: string
  text: string
  spans: []
}

export type IPrismicRichText = RichTextItem[] | []

export type IPrismicRenderedText = () => JSX.Element

export type IPrismicKeyText = string | null

export interface IPrismicSlice {
  slice_type: string
  primary: any
  items: any[]
}

export interface IPrismicImageFillled {
  dimensions: { width: number; height: number }
  alt: null
  copyright: null
  url: "string"
}

export type IPrismicImage = IPrismicImageFillled | null
