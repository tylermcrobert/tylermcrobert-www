import React from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { IPrismicRichText, IPrismicRenderedText } from "../../types/prismic"

export const asText = (text: IPrismicRichText): string =>
  PrismicRichText.asText(text)

export const RichText = (children: IPrismicRichText): IPrismicRenderedText =>
  PrismicRichText.render(children)
