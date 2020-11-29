import { SanityImage, SizeKey, ResponsiveImgSizeBlock } from 'types'
import { urlFor } from 'lib/sanity'
import { responsiveSizes } from 'style'

export const getResponsiveImgProps = ({
  img,
  aspect,
  sizes,
}: {
  img: SanityImage
  aspect?: number
  sizes: ResponsiveImgSizeBlock
}) => {
  const createWidth = (w: number) => {
    let generatedImg = urlFor(img)
      .width(w)
      .auto('format')
      .quality(85)
      .format('jpg')

    if (aspect) {
      generatedImg = generatedImg.height(Math.round(w * aspect))
    }

    return generatedImg.url() as string
  }

  // generates srcSet property
  const srcSet = [150, 300, 600, 900, 1200, 1440, 2400, 4000]
    .map(w => {
      const url = createWidth(w)
      return `${url} ${w}w`
    })
    .join(', ')

  // Creates string to set to 'sizes' attribute
  const sizesString = (() => {
    const { xxs, ...stdSizes } = sizes

    const stringWithoutFallback = Object.keys(stdSizes)
      .map(sizeString => {
        const typedSize = sizeString as SizeKey
        return `(min-width: ${responsiveSizes[typedSize]}px) ${sizes[typedSize]}`
      })
      .join(', ')

    const string = [stringWithoutFallback, xxs || responsiveSizes.xs + 'px']
      .filter(s => s)
      .join(', ')

    return string
  })()

  return {
    srcSet,
    src: createWidth(500), // set default to 500w
    sizes: sizesString,
  }
}

export default getResponsiveImgProps
