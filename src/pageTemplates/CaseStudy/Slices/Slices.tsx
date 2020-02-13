/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import React from "react"
import {
  CsContentType,
  SingleImageType,
  DoubleImageType,
  TripleImageType,
} from "templates/casestudy"
import formatImg, { FmType } from "util/formatImg"
import { Grid, Section } from "components"
import Styled from "./Styled"

const FULL_SIZE = { w: 1920, fm: "webp" as FmType }
const HALF_SIZE = { w: 1200, fm: "webp" as FmType }

interface IProps {
  data: CsContentType
}
const Slices: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {data
        .map(item => {
          switch (item.__typename) {
            case "PrismicCaseStudyCsContentSingleImage":
              return <SingleImage data={item as SingleImageType} />
            case "PrismicCaseStudyCsContentDoubleImageBlock":
              return <DoubleImage data={item as DoubleImageType} />
            case "PrismicCaseStudyCsContentTripleImageBlock":
              return <TripleImage data={item as TripleImageType} />
            default:
              return <div>asdf</div>
          }
        })
        .map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
    </>
  )
}

/**
 * Single Image
 */

interface ISingleImageProps {
  data: SingleImageType
}

const SingleImage: React.FC<ISingleImageProps> = ({ data }) => {
  const { url } = data.primary.image
  return (
    <Section>
      <Grid>
        <Styled.ImageWrapper>
          <img src={formatImg(url, FULL_SIZE)} alt="" />
        </Styled.ImageWrapper>
      </Grid>
    </Section>
  )
}

/**
 * Double image
 */

interface IDoubleImageProps {
  data: DoubleImageType
}

const DoubleImage: React.FC<IDoubleImageProps> = ({ data }) => {
  const {
    left_image: { url: leftUrl },
    right_image: { url: rightUrl },
  } = data.primary

  return (
    <Section>
      <Grid>
        <Styled.DoubleImage>
          <img src={formatImg(leftUrl, HALF_SIZE)} alt="" />
        </Styled.DoubleImage>
        <Styled.DoubleImage>
          <img src={formatImg(rightUrl, HALF_SIZE)} alt="" />
        </Styled.DoubleImage>
      </Grid>
    </Section>
  )
}

/**
 * Triple image
 */

interface ITripleImageProps {
  data: TripleImageType
}

const TripleImage: React.FC<ITripleImageProps> = ({ data }) => {
  const {
    main_image: { url: mainImageUrl },
    secondary_image_1: { url: secondaryImage1 },
    secondary_image_2: { url: secondaryImage2 },
    main_image_position: position,
  } = data.primary

  const isMainOnRight = position === "Right"

  return (
    <Styled.TripleImageWrapper invert={isMainOnRight}>
      <div>
        <img src={formatImg(secondaryImage1, HALF_SIZE)} alt="" />
        <img src={formatImg(secondaryImage2, HALF_SIZE)} alt="" />
      </div>
      <div>
        <img src={formatImg(mainImageUrl, HALF_SIZE)} alt="" />
      </div>
    </Styled.TripleImageWrapper>
  )
}

export default Slices
