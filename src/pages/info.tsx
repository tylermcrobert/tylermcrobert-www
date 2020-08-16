import { NextPage, GetStaticProps } from 'next'
import { spotifyController } from 'lib/spotify'
import { Info, Layout } from 'components'

const InfoPage: NextPage = () => {
  return (
    <Layout title="Info">
      <Info />
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
