import { IDoubleImage } from "types/Prismic"
import S from "./DoubleImage.Styled"

const DoubleImage: React.FC<{ data: IDoubleImage }> = ({ data }) => {
  return (
    <>
      <S.Img src={data.primary.left_image.url} alt="" />
      <S.Img src={data.primary.right_image.url} alt="" />
    </>
  )
}

export default DoubleImage
