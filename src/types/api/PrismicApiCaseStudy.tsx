/* eslint-disable import/no-unresolved */
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import { Document } from "prismic-javascript/d.ts/documents"
import {
  IPrismicRichText,
  IPrismicKeyText,
  IPrismicSlice,
  IPrismicImage,
} from "../prismic"

export interface IPrismicCaseStudyRes extends ApiSearchResponse {
  results: ICaseStudy[]
}

export interface ICaseStudy extends Document {
  data: {
    title: IPrismicRichText
    intro: IPrismicRichText
    description: IPrismicRichText
    cs_content: Slice[]
    deliverables: IPrismicKeyText
  }
}

export type Slice = ISingleImage | IDoubleImage

interface ISingleImage extends IPrismicSlice {
  primary: {
    image: IPrismicImage
  }
}

interface IDoubleImage extends IPrismicSlice {
  primary: {
    left_image: IPrismicImage
    right_image: IPrismicImage
  }
}
