import React from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { IPrismicRichText } from "../../types/prismic"

export const asText = (text: IPrismicRichText): string =>
  PrismicRichText.asText(text)

export const RichText = (children: IPrismicRichText) =>
  PrismicRichText.render(children)
