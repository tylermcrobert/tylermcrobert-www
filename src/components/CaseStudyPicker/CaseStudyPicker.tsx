import Link from "next/link"
import { LargeHead, Wrapper } from "components"
import { IContext } from "types/Prismic"
import { asText } from "util/richText"
import { NUMBERS } from "../../constants"
import S from "./CaseStudyPicker.Styled"

interface IProps {
  curationData: IContext
}

const CaseStudyPicker: React.FC<IProps> = ({ curationData }) => {
  return (
    <S.Wrapper>
      <Wrapper>
        <S.Content>
          {curationData.data.case_study_list.map(
            ({ case_study_item: item }, i) => (
              <LargeHead key={item.id}>
                {" "}
                {NUMBERS[i + 1]}&nbsp;
                <Link href="/[page]" as={`/${item.uid}`}>
                  <a>{asText(item.data.title)}</a>
                </Link>
              </LargeHead>
            )
          )}
        </S.Content>
      </Wrapper>
    </S.Wrapper>
  )
}

export default CaseStudyPicker
