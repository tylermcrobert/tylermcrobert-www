import React from "react"
import { NextPage } from "next"
import { Client } from "../util/prismic"

const RootPage: NextPage<{ data: any }> = ({ data }) => {
  // console.log(data)

  return <div>{JSON.stringify(data)}</div>
}

export const getStaticProps = async ctx => {
  const res = await Client().getByUID("case_study", ctx.params.rootPage, {})

  return { props: { data: res } }
}

export const getStaticPaths = () => {
  return {
    fallback: true,
    paths: [{ params: { rootPage: "hightidenyc" } }],
  }
}

export default RootPage
