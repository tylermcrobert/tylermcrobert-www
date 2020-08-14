import React from 'react'
import S from './ModuleWebsite.Styled'
import BrowserFrame from './Browserframe'
import { ModuleWebsite } from 'types'
import getResponsiveImgProps from 'util/getResponsiveImgProps'

interface IProps {
  data: ModuleWebsite
}

const Website: React.FC<IProps> = ({ data }) => {
  const { media: mediaArr, theme } = data
  const media = (mediaArr || [])[0]

  return (
    <S.BrowserBackground backgroundColor={theme?.background?.hex}>
      <S.Browser>
        <div>
          <BrowserFrame color={theme?.frame?.hex} dots={theme?.dots?.hex} />
          {media?._type === 'image' && (
            <img
              {...getResponsiveImgProps({ img: media, sizes: { xxs: '90vw' } })}
              alt=""
            />
          )}
          {/* {media && media.url && (
            <video autoPlay muted playsInline loop>
              <source src={media.url} />
            </video>
          )} */}
        </div>
      </S.Browser>
    </S.BrowserBackground>
  )
}

export default Website
