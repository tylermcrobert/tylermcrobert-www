import React from "react"
import Helmet from "react-helmet"

interface IProps {
  title: null | string
  path?: string
}

const Seo: React.FC<IProps> = ({ title, path = "" }) => {
  return (
    <Helmet>
      <html lang="en" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link rel="canonical" href={`http://tylermcrobert.com/${path}`} />
      <title>{title ? `${title} - Tyler McRobert` : "Tyler McRobert"}</title>
    </Helmet>
  )
}

export default Seo
