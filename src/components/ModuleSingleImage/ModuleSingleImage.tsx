import { ModuleSingleImage } from 'types'
import { urlFor } from 'lib/sanity'
import { useCaseStudy } from 'hooks'

const SingleImage: React.FC<{ data: ModuleSingleImage }> = ({ data }) => {
  const { alt } = useCaseStudy()
  return (
    <img
      src={
        urlFor(data.image)
          .width(1200)
          .url() || ''
      }
      alt={alt}
    />
  )
}
export default SingleImage
