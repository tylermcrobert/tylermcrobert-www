/* eslint-disable import/no-unresolved */
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import { Document } from "prismic-javascript/d.ts/documents"
import {
  IPrismicRichText,
  IPrismicKeyText,
  IPrismicSlice,
  IPrismicImage,
} from "./PrismicGeneric"

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

export interface IWebsite extends IPrismicSlice {
  primary: {
    browser_theme: string
    browser_media: { url: string } | null
    browser_image: IPrismicImage | null
    browser_frame_color: string | null
    background_color: string | null
  }
}

export interface IText extends IPrismicSlice {
  primary: {
    paragraph: IPrismicRichText
  }
}

/**
 *
 * Context Res
 *
 */

export interface IContextRes extends ApiSearchResponse {
  results: IContext[]
}

export interface IContext extends Document {
  data: {
    context_name: IPrismicRichText
    bio: IPrismicRichText
    case_study_list: ICaseStudyItem[]
  }
}

interface ICaseStudyItem {
  case_study_item: IPrismicCtxLink
}

interface IPrismicCtxLink {
  id: string
  type: string
  tags: []
  slug: string
  lang: string
  uid: string
  link_type: string
  isBroken: boolean
  data: any
}

/**
 *
 * Info
 *
 */

export interface IInfoRes extends ApiSearchResponse {
  results: IInfo[]
}

interface IInfo extends Document {
  data: {
    introduction: IPrismicRichText
    support: IPrismicRichText
    clients: "string"
  }
}
