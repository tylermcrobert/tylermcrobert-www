import { NextPage } from 'next'
import { IParsedPlaylist } from 'types'
import { Playlists, Layout } from 'components'
import { spotifyController } from 'lib/spotify'
import { PLAYLISTS } from '../constants'
import { parseSpotifyPlaylist } from '../util'

interface IProps {
  playlists: IParsedPlaylist[]
}

const InfoPage: NextPage<IProps> = ({ playlists }) => {
  return (
    <>
      <Layout title="playlists">
        <Playlists data={playlists} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const playlists = await spotifyController.getPlaylistsByIds(PLAYLISTS)
  const parsedPlaylists = playlists.map(pl => parseSpotifyPlaylist(pl))

  return {
    props: { playlists: parsedPlaylists },
  }
}

export default InfoPage
