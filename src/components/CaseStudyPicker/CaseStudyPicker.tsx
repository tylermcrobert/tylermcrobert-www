import { useContext } from "react"
import { DataCtx } from "pages/_app"
import Link from "next/link"
import { asText } from "util/richText"
import { LargeHead, Wrapper } from "components"
import { useCurationUids } from "hooks/useCurrentCuration"
import { NUMBERS } from "../../constants"
import S from "./CaseStudyPicker.Styled"

interface IProps {
  ctxUid?: string
}

const CaseStudyPicker: React.FC<IProps> = ({ ctxUid }) => {
  const curationUids = useCurationUids(ctxUid)
  const { caseStudiesRes } = useContext(DataCtx)

  const getTitle = (uid: string) =>
    caseStudiesRes.results.filter(item => item.uid === uid)[0].data.title

  return (
    <S.Wrapper>
      <Wrapper>
        <S.Content>
          {curationUids.map((uid, i) => (
            <LargeHead key={uid}>
              {" "}
              {NUMBERS[i + 1]}&nbsp;
              <Link href="/[page]" as={`/${uid}`}>
                <a>{asText(getTitle(uid))}</a>
              </Link>
            </LargeHead>
          ))}
        </S.Content>
      </Wrapper>
    </S.Wrapper>
  )
}

export default CaseStudyPicker
