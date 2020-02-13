/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
// eslint-disable-next-line no-unused-vars
import { WebsiteType } from "templates/casestudy"
import { Grid, SmallSection } from "components"
import Styled from "./Styled"

interface IProps {
  data: WebsiteType
}
const Website: React.FC<IProps> = ({ data }) => {
  const {
    browser_media: { url: media },
    browser_image: { url: image },
    // browser_frame_color: frameColor,
    background_color: backgroundColor,
  } = data.primary

  return (
    <SmallSection>
      <Grid>
        <Styled.BrowserBackground backgroundColor={backgroundColor}>
          <Styled.Browser>
            {image && <img src={image} alt="" />}
            {media && (
              <video autoPlay muted playsInline loop>
                <source src={media} />
              </video>
            )}
          </Styled.Browser>
        </Styled.BrowserBackground>
      </Grid>
    </SmallSection>
  )
}

export default Website
