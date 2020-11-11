import React from 'react'
import S from './ModuleWebsite.Styled'
import BrowserFrame from './Browserframe'
import { ModuleWebsite, WebsiteMedia } from 'types'
import getResponsiveImgProps from 'util/getResponsiveImgProps'

interface IProps {
  data: ModuleWebsite
}

const Website: React.FC<IProps> = ({ data }) => {
  const { media: mediaArr, theme } = data
  const media = mediaArr && mediaArr[0]

  return (
    <S.BrowserBackground backgroundColor={theme?.background?.hex}>
      <S.Browser>
        <div>
          <BrowserFrame color={theme?.frame?.hex} dots={theme?.dots?.hex} />
          {media && <Media data={media} />}
        </div>
      </S.Browser>
    </S.BrowserBackground>
  )
}

export const Media: React.FC<{ data: WebsiteMedia }> = ({ data: media }) => {
  const videoUrl = (media?._type === 'video' && media.video?.url) || null

  return (
    <>
      {media?._type === 'image' && (
        <img
          {...getResponsiveImgProps({
            img: media,
            sizes: { xxs: '90vw' },
          })}
          alt=""
        />
      )}
      {videoUrl && <video autoPlay muted playsInline loop src={videoUrl} />}
    </>
  )
}

export default Website
