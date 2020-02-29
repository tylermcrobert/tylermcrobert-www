import { ICaseStudy } from "types/api/PrismicApiCaseStudy"
import { asText, RichText } from "util/richText"
import { LargeHead } from "components"
import Slices from "./Slices/Slices"

const CaseStudy: React.FC<{ data: ICaseStudy }> = ({ data: { data } }) => {
  const title = asText(data.title)
  const { deliverables, intro, description, cs_content: slices } = data

  return (
    <>
      <LargeHead>{title}</LargeHead>
      <h2>
        <RichText>{intro}</RichText>
      </h2>
      <br />

      <p>{deliverables}</p>
      <br />

      <RichText>{description}</RichText>
      <br />
      <Slices data={slices} />
      <hr />
    </>
  )
}

export default CaseStudy
