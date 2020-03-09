import React, { useState, useEffect } from "react"
import { NextPage } from "next"
import { client } from "../util/prismic"
import Head from "next/head"
import usePreviewData from "../hooks/usePreviewData"

const RootPage: NextPage<{
  data: any
  rootPage: string
}> = ({ data, rootPage }) => {
  const pageData = usePreviewData(async () => {
    const res = await client.getByUID("case_study", "hightidenyc", {})
    return res
  }, data)

  if (pageData) {
    return (
      <div>
        {JSON.stringify(pageData)}
        <Head>
          <script
            async
            defer
            src="//static.cdn.prismic.io/prismic.js?repo=tylermcrobert&new=true"
          ></script>
        </Head>
      </div>
    )
  }

  return <div>Not found :(</div>
}

export const getStaticProps = async ctx => {
  const res = await client.getByUID("case_study", ctx.params.rootPage, {})

  return { props: { data: res, rootPage: ctx.params.rootPage } }
}

export const getStaticPaths = test => {
  return {
    fallback: true,
    paths: [{ params: { rootPage: "hightidenyc", test: "asdf" } }],
  }
}

export default RootPage
