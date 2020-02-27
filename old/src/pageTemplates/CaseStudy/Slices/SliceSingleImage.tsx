import React from "react"
import { Grid, SmallSection } from "components"
import formatImg from "util/formatImg"
import { ISingleImage } from "templates/casestudy"
import { useCaseStudyCtx } from "pageTemplates/CaseStudy/CaseStudy"
import { FULL_SIZE } from "./constants"
import Styled from "./Styled"

interface ISingleImageProps {
  data: ISingleImage
}

const SingleImage: React.FC<ISingleImageProps> = ({ data }) => {
  const { url } = data.primary.image
  const { altText } = useCaseStudyCtx()

  return url ? (
    <SmallSection>
      <Grid>
        <Styled.ImageWrapper>
          <img src={formatImg(url, FULL_SIZE)} alt={altText} />
        </Styled.ImageWrapper>
      </Grid>
    </SmallSection>
  ) : null
}

export default SingleImage
