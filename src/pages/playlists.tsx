import { NextPage } from "next"
import { IParsedPlaylist } from "types/SpotifyPlaylist"
import { Seo, Playlists } from "components"
import getPlaylists from "util/getPlaylists"
import parseSpotify from "util/parseSpotify"

interface IProps {
  playlists: IParsedPlaylist[]
}

const InfoPage: NextPage<IProps> = ({ playlists }) => {
  return (
    <>
      <Seo title="Playlists" />
      <Playlists data={playlists} />
    </>
  )
}

export async function getStaticProps({ req }) {
  const playlistData = await getPlaylists()
  const playlists = playlistData.map(pl => parseSpotify(pl))

  return {
    props: { playlists },
  }
}

export default InfoPage
