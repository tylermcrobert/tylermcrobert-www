import Prismic from "prismic-javascript"
import { Client } from "util/prismic"
import { NextPage } from "next"
import { IInfoRes } from "types/Prismic"
import { Info } from "components"
import useInitial from "hooks/useInitial"

interface IProps {
  infoRes?: IInfoRes
}

const InfoPage: NextPage<IProps> = ({ infoRes }) => {
  return <Info data={infoRes} />
}

InfoPage.getInitialProps = async ({ req }) => {
  if (!process.browser) {
    const infoRes: IInfoRes = await Client(req).query(
      Prismic.Predicates.at("document.type", "info"),
      {}
    )

    return { infoRes }
  }

  return (window as any).__NEXT_DATA__.props.pageProps
}

export default InfoPage
