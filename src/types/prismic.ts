interface IRichTextItem {
  type: string
  text: string
  spans: any[]
}

export type IRichText = IRichTextItem[]

interface IDimensions {
  width: number
  height: number
}

export interface IPrismicImage {
  dimensions: IDimensions
  alt: string | null
  copyright: string | null
  url: string | null
}
