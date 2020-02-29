import { ICaseStudy } from "types/Prismic"
import { asText, RichText } from "util/richText"
import { LargeHead, Html, PickerWrapper } from "components"
import { useIndexFromUid } from "hooks/useCurrentCuration"
import Slices from "./Slices/Slices"
import S from "./CaseStudy.Styled"
import { UNICODE, NUMBERS } from "../../constants"

const CaseStudy: React.FC<{ data: ICaseStudy }> = ({
  data: { data, uid, ...res },
}) => {
  const index = useIndexFromUid(uid)
  const { deliverables, intro, description, cs_content: slices } = data
  const title = asText(data.title)
  const dotDeliverables = deliverables
    ? deliverables.split(", ").join(` ${UNICODE.CIRCLE}&nbsp;`)
    : ""
  const date = res.first_publication_date.replace("+0000", "")

  return (
    <PickerWrapper>
      <S.Intro>
        <h1>
          {NUMBERS[index + 1]} {title}
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
      </S.Intro>

      <S.SliceWrap>
        <Slices data={slices} />
      </S.SliceWrap>
    </PickerWrapper>
  )
}

export default CaseStudy
