import { NextPage, GetStaticProps } from 'next'
import { spotifyController } from 'lib/spotify'
import { Info, Layout } from 'components'
import { ISpotifyPlaylist } from 'types'

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

  const playlists = await spotifyController.getPlaylistsByIds([
    '5fve4KDdKM9QMciHt779cY',
    '2ml6R8vbhpSQDIVYbupJPL',
    '5iibda0SvRRNw0GPyQHx01',
    '4U8279jSqmrxcqU2PyZNH6',
    '3NZb00czzNax0Xns0Uvvf5',
  ])

  return {
    props: { playlists, infoRes },
  }
}

export default InfoPage
