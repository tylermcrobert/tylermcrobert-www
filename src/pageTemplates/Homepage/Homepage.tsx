import React from "react"
import { Link } from "gatsby"
// eslint-disable-next-line no-unused-vars
import { HomepageData } from "../../templates/homepage"
import { Layout } from "../../components"

interface IProps {
  ctx: string
  data: HomepageData
}

const Homepage: React.FC<IProps> = ({ ctx, data }) => {
  const items = data.prismicContext.data.case_study_list
    .map(item => item.case_study_item)
    .map(item => ({
      uid: item.uid,
      title: item.document[0].data.title.text,
    }))

  return (
    <Layout>
      homepage, ctx: {ctx}
      <ul>
        {items.map(({ title, uid }) => (
          <li key={title}>
            <Link to={`/${uid}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Homepage
