/* eslint-disable @typescript-eslint/camelcase */
import { ITripleImage } from "types/api/PrismicApiCaseStudy"

const TripleImage: React.FC<{ data: ITripleImage }> = ({ data }) => {
  const { main_image, secondary_image_1, secondary_image_2 } = data.primary
  return (
    <>
      <img src={main_image.url} alt="" />
      <img src={secondary_image_1.url} alt="" />
      <img src={secondary_image_2.url} alt="" />
    </>
  )
}

export default TripleImage
