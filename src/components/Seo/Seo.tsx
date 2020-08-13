import React from 'react'
import Head from 'next/head'

export type SeoProps = {
  title: string | null
  // TODO: Require desc + img
}

const Seo: React.FC<SeoProps> = ({ title: titleProp }) => {
  return (
    <Head>
      <title>
        {titleProp ? `${titleProp} – Tyler McRobert` : 'Tyler McRobert'}
      </title>
    </Head>
  )
}

export default Seo
