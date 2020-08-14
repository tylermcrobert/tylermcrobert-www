import React from 'react'
import { ModuleDynamicImage } from 'types'
import { useCaseStudy } from 'hooks'
import getResponsiveImgProps from 'util/getResponsiveImgProps'
import S from './ModuleDynamicImage.Styled'

const DynamicImage: React.FC<{ data: ModuleDynamicImage }> = ({ data }) => {
  const isHalf = data.span === 'half'
  const { alt } = useCaseStudy()

  return data.image ? (
    <S.Img
      isHalf={isHalf}
      {...getResponsiveImgProps({
        img: data.image,
        aspect: data.aspect,
        sizes: {
          xxs: '100vw',
          sm: isHalf ? '50vw' : '100vw',
        },
      })}
      alt={alt}
    />
  ) : null
}

export default DynamicImage
