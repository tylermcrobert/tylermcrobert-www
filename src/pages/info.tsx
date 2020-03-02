import Prismic from "prismic-javascript"
import { Client } from "util/prismic"
import { NextPage } from "next"
import { IInfoRes } from "types/Prismic"
import { Info } from "components"
import { getAuthToken, getPlaylist } from "util/getPlaylist"

interface IProps {
  infoRes?: IInfoRes
}

const InfoPage: NextPage<IProps> = ({ infoRes }) => {
  return <Info data={infoRes} />
}

export async function getStaticProps({ req }) {
  const infoRes: IInfoRes = await Client(req).query(
    Prismic.Predicates.at("document.type", "info"),
    {}
  )

  const id = "5iibda0SvRRNw0GPyQHx01"
  const token = await getAuthToken()
  const playlistData = await getPlaylist({ id, token })

  console.log(playlistData)

  return {
    props: { infoRes },
  }
}

export default InfoPage
