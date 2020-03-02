import Prismic from "prismic-javascript"
import { Client } from "util/prismic"
import { NextPage } from "next"
import { IInfoRes } from "types/Prismic"
import { ISpotifyPlaylist } from "types/SpotifyPlaylist"
import { Info, Seo } from "components"
import getPlaylists from "util/getPlaylists"

interface IProps {
  infoRes: IInfoRes
  playlistData: ISpotifyPlaylist[]
}

const InfoPage: NextPage<IProps> = ({ infoRes, playlistData }) => {
  console.log(playlistData.map(item => item.name))

  return (
    <>
      <Seo title={null} />
      <Info data={infoRes} playlistData={playlistData} />
    </>
  )
}

export async function getStaticProps({ req }) {
  const infoRes: IInfoRes = await Client(req).query(
    Prismic.Predicates.at("document.type", "info"),
    {}
  )

  const playlistData = await getPlaylists()

  return {
    props: { infoRes, playlistData },
  }
}

export default InfoPage
