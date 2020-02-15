import React from "react"
// eslint-disable-next-line no-unused-vars
import { ITripleImage } from "templates/casestudy"
import formatImg from "util/formatImg"
import { Grid } from "components"
import Styled from "./Styled"
import { HALF_SIZE } from "./constants"

interface ITripleImageProps {
  data: ITripleImage
}

const TripleImage: React.FC<ITripleImageProps> = ({ data }) => {
  const {
    main_image: { url: mainImageUrl },
    secondary_image_1: { url: secondaryImage1 },
    secondary_image_2: { url: secondaryImage2 },
    main_image_position: position,
  } = data.primary

  const isLargeOnRight = position === "Right"

  return (
    <Grid>
      <Styled.TripleImageSide>
        {secondaryImage1 && (
          <img src={formatImg(secondaryImage1, HALF_SIZE)} alt="" />
        )}
        {secondaryImage2 && (
          <img src={formatImg(secondaryImage2, HALF_SIZE)} alt="" />
        )}
      </Styled.TripleImageSide>
      <Styled.TripleImageSideLarge isRight={isLargeOnRight}>
        {mainImageUrl && (
          <img src={formatImg(mainImageUrl, HALF_SIZE)} alt="" />
        )}
      </Styled.TripleImageSideLarge>
    </Grid>
  )
}

export default TripleImage
