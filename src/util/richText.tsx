import React from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { IPrismicRichText, IPrismicRenderedText } from "../types/prismic"

export const asText = (text: IPrismicRichText): string =>
  PrismicRichText.asText(text)

interface IRichTextProps {
  children: IPrismicRichText
}

export const RichText: React.FC<IRichTextProps> = ({ children }) => (
  <>{PrismicRichText.render(children)}</>
)
