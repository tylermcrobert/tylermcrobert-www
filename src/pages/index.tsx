import { useContext } from "react"
import { NextPage } from "next"
import Link from "next/link"
import { asText } from "util/richText"
import { IPrismicCaseStudyRes } from "types/api/PrismicApiCaseStudy"
import { DataCtx } from "./_app"

interface IProps {
  caseStudiesRes: IPrismicCaseStudyRes
}

const Home: NextPage<IProps> = () => {
  const { caseStudiesRes } = useContext(DataCtx)

  return (
    <div>
      {caseStudiesRes.results.map(item => (
        <div key={item.id}>
          <Link href="/[csUid]" as={`/${item.uid}`}>
            <a>{asText(item.data.title)}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
