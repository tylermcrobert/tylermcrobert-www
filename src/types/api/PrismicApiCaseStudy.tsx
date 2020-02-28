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

export type Slice = ISingleImage | IDoubleImage | ITripleImage

export interface ISingleImage extends IPrismicSlice {
  primary: {
    image: IPrismicImage
  }
}

export interface IDoubleImage extends IPrismicSlice {
  primary: {
    left_image: IPrismicImage
    right_image: IPrismicImage
  }
}

export interface ITripleImage extends IPrismicSlice {
  primary: {
    main_image_position: "Left" | "Right"
    main_image: IPrismicImage
    secondary_image_1: IPrismicImage
    secondary_image_2: IPrismicImage
  }
}
