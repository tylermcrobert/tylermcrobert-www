/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
// eslint-disable-next-line no-unused-vars
import { IWebsite } from "templates/casestudy"
import { Grid, SmallSection } from "components"
import { useCaseStudyCtx } from "hooks"
import Styled from "./Styled"

interface IProps {
  data: IWebsite
}
const Website: React.FC<IProps> = ({ data }) => {
  const { altText } = useCaseStudyCtx()
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
              {image && image.url && <img src={image.url} alt={altText} />}
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
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 439 13"
    preserveAspectRatio="none"
  >
    <path
      d="M435 0c2.209139 0 4 1.790861 4 4v9H0V4c0-2.209139 1.790861-4 4-4h431zM6.5 4C5.11928813 4 4 5.11928813 4 6.5S5.11928813 9 6.5 9 9 7.88071187 9 6.5 7.88071187 4 6.5 4zm16 0C21.1192881 4 20 5.11928813 20 6.5S21.1192881 9 22.5 9 25 7.88071187 25 6.5 23.8807119 4 22.5 4zm-8 0C13.1192881 4 12 5.11928813 12 6.5S13.1192881 9 14.5 9 17 7.88071187 17 6.5 15.8807119 4 14.5 4z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
)
export default Website
