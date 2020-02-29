import { ICaseStudy } from "types/Prismic"
import { asText, RichText } from "util/richText"
import { LargeHead, Html } from "components"
import Slices from "./Slices/Slices"
import S from "./CaseStudy.Styled"
import { UNICODE, NUMBERS } from "../../constants"

const CaseStudy: React.FC<{ data: ICaseStudy }> = ({
  data: { data, ...res },
}) => {
  const { deliverables, intro, description, cs_content: slices } = data
  const title = asText(data.title)
  const dotDeliverables = deliverables
    ? deliverables.split(", ").join(` ${UNICODE.CIRCLE}&nbsp;`)
    : ""
  const date = res.first_publication_date.replace("+0000", "")

  return (
    <S.Intro>
      <h1>
        {NUMBERS[7]} {title}
      </h1>

      <LargeHead as="h2">
        <RichText>{intro}</RichText>
      </LargeHead>

      <S.Deliverables>
        <p>{date}</p>
        <p>
          <Html>{dotDeliverables}</Html>
        </p>
      </S.Deliverables>

      <S.Desc>
        <RichText>{description}</RichText>
      </S.Desc>

      <Slices data={slices} />
    </S.Intro>
  )
}

export default CaseStudy
