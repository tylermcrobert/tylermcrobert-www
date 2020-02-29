import { useContext } from "react"
import Link from "next/link"
import { asText } from "util/richText"
import { DataCtx } from "pages/_app"
import { LargeHead, Wrapper } from "components"
import { NUMBERS } from "../../constants"
import S from "./CaseStudyPicker.Styled"

const CaseStudyPicker: React.FC = () => {
  const { caseStudiesRes } = useContext(DataCtx)
  return (
    <S.Wrapper>
      <Wrapper>
        <S.Content>
          {caseStudiesRes.results.map((item, i) => (
            <LargeHead key={item.id}>
              {" "}
              {NUMBERS[i + 1]}&nbsp;
              <Link href="/[csUid]" as={`/${item.uid}`}>
                <a>{asText(item.data.title)}</a>
              </Link>
            </LargeHead>
          ))}
        </S.Content>
      </Wrapper>
    </S.Wrapper>
  )
}

export default CaseStudyPicker
