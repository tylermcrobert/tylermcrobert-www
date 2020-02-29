/* eslint-disable @typescript-eslint/camelcase */
import { ITripleImage } from "types/Prismic"
import S from "./TripleImage.Styled"

const TripleImage: React.FC<{ data: ITripleImage }> = ({ data }) => {
  const { main_image, secondary_image_1, secondary_image_2 } = data.primary
  const isLeft = data.primary.main_image_position === "Left"

  const items = [
    <S.LargeImg src={main_image.url} alt="" key={1} />,
    <S.Partition key={2}>
      <img src={secondary_image_1.url} alt="" />
      <img src={secondary_image_2.url} alt="" />
    </S.Partition>,
  ]

  return <>{isLeft ? items : [...items].reverse()}</>
}

export default TripleImage
