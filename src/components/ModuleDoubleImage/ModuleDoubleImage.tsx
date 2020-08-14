import S from './DoubleImage.Styled'
import { ModuleDoubleImage, SanityImage } from 'types'
import getResponsiveImgProps from 'util/getResponsiveImgProps'
import { useCaseStudy } from 'hooks'

const DoubleImage: React.FC<{ data: ModuleDoubleImage }> = ({ data }) => {
  const { alt } = useCaseStudy()
  const img = (img: SanityImage) =>
    getResponsiveImgProps({
      img: img,
      aspect: data.aspect,
      sizes: { xxs: '100vw', sm: '100vw' },
    })
  return (
    <>
      <S.Img>
        {data.leftImage && <img {...img(data.leftImage)} alt={alt} />}
      </S.Img>
      <S.Img>
        {data.rightImage && <img {...img(data.rightImage)} alt={alt} />}
      </S.Img>
    </>
  )
}

export default DoubleImage
