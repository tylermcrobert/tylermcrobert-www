import React from "react"
import { CtxLink } from "components"
// eslint-disable-next-line no-unused-vars
import { HomepageData } from "templates/homepage"

interface IProps {
  data: HomepageData
}

const Homepage: React.FC<IProps> = ({ data }) => {
  const items = data.prismicContext.data.case_study_list
    .map(item => item.case_study_item)
    .map(item => ({
      uid: item.uid,
      title: item.document[0].data.title.text,
    }))

  return (
    <>
      <ul>
        {items.map(({ title, uid }) => (
          <li key={title}>
            <CtxLink to={`/${uid}`}>{title}</CtxLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Homepage
