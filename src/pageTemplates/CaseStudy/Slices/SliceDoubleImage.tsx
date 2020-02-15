import React from "react"
// eslint-disable-next-line no-unused-vars
import { IDoubleImage } from "templates/casestudy"
import formatImg from "util/formatImg"
import { Grid, SmallSection } from "components"
import Styled from "./Styled"
import { HALF_SIZE } from "./constants"

interface IDoubleImageProps {
  data: IDoubleImage
}

const DoubleImage: React.FC<IDoubleImageProps> = ({ data }) => {
  const {
    left_image: { url: leftUrl },
    right_image: { url: rightUrl },
  } = data.primary

  return (
    <SmallSection>
      <Grid>
        <Styled.DoubleImage>
          {leftUrl && <img src={formatImg(leftUrl, HALF_SIZE)} alt="" />}
        </Styled.DoubleImage>
        <Styled.DoubleImage>
          {rightUrl && <img src={formatImg(rightUrl, HALF_SIZE)} alt="" />}
        </Styled.DoubleImage>
      </Grid>
    </SmallSection>
  )
}

export default DoubleImage
