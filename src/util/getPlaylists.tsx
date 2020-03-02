import { getAuthToken, getPlaylist } from "util/getPlaylist"

const PLAYLISTS = [
  "5fve4KDdKM9QMciHt779cY",
  "2ml6R8vbhpSQDIVYbupJPL",
  "5iibda0SvRRNw0GPyQHx01",
  "4U8279jSqmrxcqU2PyZNH6",
  "3NZb00czzNax0Xns0Uvvf5",
]

const getPlaylists = async (playlists = PLAYLISTS) => {
  const token = await getAuthToken()

  const playlistData = await Promise.all(
    playlists.map(id =>
      getPlaylist({
        token,
        id,
      })
    )
  )

  return playlistData
}

export default getPlaylists
