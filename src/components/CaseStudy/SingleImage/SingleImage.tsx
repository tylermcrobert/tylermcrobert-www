import { ISingleImage } from "types/Prismic"

const SingleImage: React.FC<{ data: ISingleImage }> = ({ data }) => {
  return (
    <>
      <img src={data.primary.image.url} alt="" />
    </>
  )
}
export default SingleImage
