import { ISingleImage } from "types/api/PrismicApiCaseStudy"

const SingleImage: React.FC<{ data: ISingleImage }> = ({ data }) => {
  return (
    <>
      <img src={data.primary.image.url} alt="" />
    </>
  )
}
export default SingleImage
