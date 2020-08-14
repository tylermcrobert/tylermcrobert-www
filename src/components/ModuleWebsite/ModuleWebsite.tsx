import React from 'react'
// import S from './ModuleWebsite.Styled'
// import BrowserFrame from './Browserframe'
import { ModuleWebsite } from 'types'

interface IProps {
  data: ModuleWebsite
}

const Website: React.FC<IProps> = () =>
  // { data }
  {
    return null
    // const {
    //   browser_media: media,
    //   browser_image: image,
    //   browser_frame_color: frameColor,
    //   background_color: backgroundColor,
    // } = data.primary

    // return (
    //   <S.BrowserBackground backgroundColor={backgroundColor || 'black'}>
    //     <S.Browser>
    //       <div>
    //         <BrowserFrame color={frameColor || undefined} />
    //         {image && image.url && <img src={image.url} alt="" />}
    //         {media && media.url && (
    //           <video autoPlay muted playsInline loop>
    //             <source src={media.url} />
    //           </video>
    //         )}
    //       </div>
    //     </S.Browser>
    //   </S.BrowserBackground>
    // )
  }

export default Website
