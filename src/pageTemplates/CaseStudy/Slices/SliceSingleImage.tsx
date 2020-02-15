import React from "react"
import { Grid, SmallSection } from "components"
import formatImg from "util/formatImg"
// eslint-disable-next-line no-unused-vars
import { ISingleImage } from "templates/casestudy"
import { FULL_SIZE } from "./constants"
import Styled from "./Styled"

interface ISingleImageProps {
  data: ISingleImage
}

const SingleImage: React.FC<ISingleImageProps> = ({ data }) => {
  const { url } = data.primary.image
  return url ? (
    <SmallSection>
      <Grid>
        <Styled.ImageWrapper>
          <img src={formatImg(url, FULL_SIZE)} alt="" />
        </Styled.ImageWrapper>
      </Grid>
    </SmallSection>
  ) : null
}

export default SingleImage
