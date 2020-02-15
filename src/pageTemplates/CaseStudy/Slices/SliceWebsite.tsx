/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
// eslint-disable-next-line no-unused-vars
import { IWebsite } from "templates/casestudy"
import { Grid, SmallSection } from "components"
import Styled from "./Styled"

interface IProps {
  data: IWebsite
}
const Website: React.FC<IProps> = ({ data }) => {
  const {
    browser_media: media,
    browser_image: image,
    // browser_frame_color: frameColor,
    background_color: backgroundColor,
  } = data.primary

  return (
    <SmallSection>
      <Grid>
        <Styled.BrowserBackground backgroundColor={backgroundColor || "black"}>
          <Styled.Browser>
            {image && image.url && <img src={image.url} alt="" />}
            {media && media.url && (
              <video autoPlay muted playsInline loop>
                <source src={media.url} />
              </video>
            )}
          </Styled.Browser>
        </Styled.BrowserBackground>
      </Grid>
    </SmallSection>
  )
}

export default Website
