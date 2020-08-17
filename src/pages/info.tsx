import { NextPage, GetStaticProps } from 'next'
import { spotifyController } from 'lib/spotify'
import { Info, Layout } from 'components'
import { ISpotifyPlaylist } from 'types'
import { PLAYLISTS } from '../constants'

const InfoPage: NextPage<{ playlists: ISpotifyPlaylist[] }> = ({
  playlists,
}) => {
  return (
    <Layout title="Info">
      <Info playlists={playlists} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const infoRes = null

  const playlists = await spotifyController.getPlaylistsByIds(PLAYLISTS)

  return {
    props: { playlists, infoRes },
  }
}

export default InfoPage
