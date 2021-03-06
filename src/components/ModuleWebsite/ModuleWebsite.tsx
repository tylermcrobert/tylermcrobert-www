import React from 'react'
import S from './ModuleWebsite.Styled'
import BrowserFrame from './Browserframe'
import { ModuleWebsite, WebsiteMedia } from 'types'
import getResponsiveImgProps from 'util/getResponsiveImgProps'
import { ViewportVideo } from 'components'

interface IProps {
  data: ModuleWebsite
}

const Website: React.FC<IProps> = ({ data }) => {
  const { media: mediaArr, theme } = data
  const media = mediaArr && mediaArr[0]
  const isFrameVisible = data.showFrame === undefined ? true : data.showFrame

  return (
    <S.BrowserBackground backgroundColor={theme?.background?.hex}>
      <S.Browser>
        {data.backgroundImg && (
          <S.BackgroundImage
            alt="background image"
            {...getResponsiveImgProps({
              img: data.backgroundImg,
              sizes: { xxs: '100vw' },
              aspect: 2 / 3,
            })}
          />
        )}
        <S.Content>
          {isFrameVisible && (
            <BrowserFrame color={theme?.frame?.hex} dots={theme?.dots?.hex} />
          )}
          {media && <Media data={media} />}
        </S.Content>
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
      {videoUrl && <ViewportVideo src={videoUrl} />}
    </>
  )
}

export default Website
