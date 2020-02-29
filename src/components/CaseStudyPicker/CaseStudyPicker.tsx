import { useContext } from "react"
import Link from "next/link"
import { asText } from "util/richText"
import { DataCtx } from "pages/_app"
import { LargeHead, Wrapper } from "components"
import { NUMBERS } from "../../constants"
import S from "./CaseStudyPicker.Styled"

const CaseStudyPicker: React.FC = () => {
  const { caseStudiesRes, ctxRes, currentCtxUid } = useContext(DataCtx)

  const currentCtx = ctxRes.results.filter(
    item => item.uid === currentCtxUid
  )[0]

  const currentCtxUids = currentCtx.data.case_study_list.map(
    item => item.case_study_item.uid
  )

  const getTitleByUid = (uid: string) => {
    return caseStudiesRes.results.filter(item => item.uid === uid)[0].data.title
  }

  return (
    <S.Wrapper>
      <Wrapper>
        <S.Content>
          {currentCtxUids.map((uid, i) => (
            <LargeHead key={uid}>
              {" "}
              {NUMBERS[i + 1]}&nbsp;
              <Link href="/[csUid]" as={`/${uid}`}>
                <a>{asText(getTitleByUid(uid))}</a>
              </Link>
            </LargeHead>
          ))}
        </S.Content>
      </Wrapper>
    </S.Wrapper>
  )
}

export default CaseStudyPicker
