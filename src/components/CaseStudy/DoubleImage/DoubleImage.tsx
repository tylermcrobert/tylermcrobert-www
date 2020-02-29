import { IDoubleImage } from "types/Prismic"

const DoubleImage: React.FC<{ data: IDoubleImage }> = ({ data }) => {
  return (
    <>
      <img src={data.primary.left_image.url} alt="" />
      <img src={data.primary.right_image.url} alt="" />
    </>
  )
}

export default DoubleImage
