/* eslint-disable no-case-declarations */
import React from "react"
import { RichText as PrismicRichText, Elements } from "prismic-reactjs"
import { IPrismicRichText } from "types/PrismicGeneric"

export const asText = (text: IPrismicRichText): string =>
  PrismicRichText.asText(text)

interface IRichTextProps {
  children: IPrismicRichText
}

const htmlSerializer = (type, element, content, children, key) => {
  return type === Elements.heading1 ||
    type === Elements.heading2 ||
    type === Elements.heading3 ||
    type === Elements.heading4 ||
    type === Elements.heading5 ||
    type === Elements.heading6 ||
    type === Elements.paragraph
    ? children
    : null
}

export const RichText: React.FC<IRichTextProps> = ({ children }) => (
  <PrismicRichText render={children} htmlSerializer={htmlSerializer} />
)
