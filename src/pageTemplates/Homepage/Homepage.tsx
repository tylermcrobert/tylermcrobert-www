/* eslint-disable no-underscore-dangle */
import React from "react"
import { CtxLink } from "components"
// eslint-disable-next-line no-unused-vars
import { IPrismicContext } from "templates/homepage"

const { RichText } = require("prismic-reactjs")

interface IProps {
  data: IPrismicContext
}

const Homepage: React.FC<IProps> = ({ data }) => {
  const items = data.prismic.context.case_study_list
    .map(cs => cs.case_study_item)
    .map(cs => ({ uid: cs._meta.uid, title: RichText.asText(cs.title) }))

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
