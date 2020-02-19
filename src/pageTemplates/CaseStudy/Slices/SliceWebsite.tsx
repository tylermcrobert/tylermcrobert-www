/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
// eslint-disable-next-line no-unused-vars
import { IWebsite } from "templates/casestudy"
import { Grid, SmallSection } from "components"
import { useCaseStudyCtx } from "pageTemplates/CaseStudy/CaseStudy"
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
    <g fill="none" fillRule="evenodd">
      <path
        d="M4 0h431c2.209139 0 4 1.790861 4 4v9H0V4c0-2.209139 1.790861-4 4-4z"
        fill={color}
      />
      <circle fill="#FF6158" cx="6.5" cy="6.5" r="2.5" />
      <circle fill="#FFBE2D" cx="22.5" cy="6.5" r="2.5" />
      <circle fill="#27C93F" cx="14.5" cy="6.5" r="2.5" />
    </g>
  </svg>
)
export default Website
