import { useEffect, useState } from "react"

interface ITrack {
  artist: {
    ["#text"]: string
  }
  name: string
}
interface ILastFMRes {
  recenttracks: {
    track: ITrack[]
  }
}

const ENDPOINT =
  "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=tyler-mcrobert&api_key=1e87695de290cd017718696f211e84a4&format=json"

const useNowPlaying = () => {
  const [lastFmData, setData] = useState<ILastFMRes | null>(null)

  useEffect(() => {
    fetch(ENDPOINT)
      .then(res => res.json())
      .then((data: ILastFMRes) => {
        setData(data)
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err))
  }, [])

  if (lastFmData) {
    const track = lastFmData.recenttracks.track[0]

    return {
      loading: false,
      trackName: track.name,
      artist: track.artist["#text"],
    }
  }
  return { loading: true }
}

export default useNowPlaying
