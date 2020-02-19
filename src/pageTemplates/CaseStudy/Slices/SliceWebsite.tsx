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
    browser_frame_color: frameColor,
    background_color: backgroundColor,
  } = data.primary

  return (
    <SmallSection>
      <Grid>
        <Styled.BrowserBackground backgroundColor={backgroundColor || "black"}>
          <Styled.Browser>
            <div>
              <BrowserFrame color={frameColor || undefined} />
              {image && image.url && <img src={image.url} alt="" />}
              {media && media.url && (
                <video autoPlay muted playsInline loop>
                  <source src={media.url} />
                </video>
              )}
            </div>
          </Styled.Browser>
        </Styled.BrowserBackground>
      </Grid>
    </SmallSection>
  )
}

const BrowserFrame: React.FC<{ color?: string }> = ({ color = "#D8D8D8" }) => (
  <svg
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 439 11"
  >
    <path
      d="M435 0c2.209139 0 4 1.790861 4 4v7H0V4c0-2.209139 1.790861-4 4-4h431zM6.5 3C5.11928813 3 4 4.11928813 4 5.5S5.11928813 8 6.5 8 9 6.88071187 9 5.5 7.88071187 3 6.5 3zm16 0C21.1192881 3 20 4.11928813 20 5.5S21.1192881 8 22.5 8 25 6.88071187 25 5.5 23.8807119 3 22.5 3zm-8 0C13.1192881 3 12 4.11928813 12 5.5S13.1192881 8 14.5 8 17 6.88071187 17 5.5 15.8807119 3 14.5 3z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
)
export default Website
