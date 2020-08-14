import S from './ModuleTripleImage.Styled'
import { ModuleTripleImage, SanityImage } from 'types'
import { useCaseStudy } from 'hooks'
import getResponsiveImgProps from 'util/getResponsiveImgProps'

const TripleImage: React.FC<{ data: ModuleTripleImage }> = ({ data }) => {
  const { alt } = useCaseStudy()
  const getSmallImg = (img: SanityImage) =>
    getResponsiveImgProps({
      img: img,
      aspect: 2 / 3,
      sizes: { xxs: '100vw', sm: '50vw' },
    })

  const items = [
    <S.LargeImg
      {...getResponsiveImgProps({
        img: data.mainImage,
        aspect: 3 / 2,
        sizes: { xxs: '100vw', sm: '50vw' },
      })}
      alt={alt}
      key={1}
    />,
    <S.Partition key={2}>
      <img {...getSmallImg(data.secondaryImage1)} alt={alt} />
      <img {...getSmallImg(data.secondaryImage2)} alt={alt} />
    </S.Partition>,
  ]

  return <>{data.imageRight ? items : [...items].reverse()}</>
}

export default TripleImage
