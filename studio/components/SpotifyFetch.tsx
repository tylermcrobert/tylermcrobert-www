// 'http://localhost:5173/api/spotify/playlist/4ZKYVt4lSbsfOWgOc0bybT'

import React, {useState} from 'react'
import {Box, Button} from '@sanity/ui'
import {set, ObjectInputProps} from 'sanity'

function formatOutput(data: any) {
  const oldestDate = data.tracks.items
    .map((item: any) => new Date(item.added_at))
    .sort((a: number, b: number) => a - b)[0] as Date

  const totalMilliseconds = data.tracks.items
    .map((item: any) => item.track.duration_ms)
    .reduce((total: number, current: number) => total + current, 0)

  return {
    title: data.name,
    link: data.external_urls.spotify,
    image: data.images[0].url,
    date: oldestDate.toISOString().split('.')[0],
    duration: totalMilliseconds,
    tracks: data.tracks.items.map((item: any) => ({
      _key: crypto.randomUUID(),
      name: item.track.name,
      added: item.added_at,
      duration: item.track.duration_ms,
      artists: item.track.artists.map((item: any) => item.name),
    })),
  }
}

function getSpotifyPlaylistId(url: string) {
  const match = url.match(/playlist\/([a-zA-Z0-9]+)/)
  return match ? match[1] : null
}

const SpotifyFetch: React.FC<ObjectInputProps> = (props) => {
  const {value = {}, onChange, renderDefault} = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    if (!value.link) {
      setError('Link must be provided.')
      setLoading(false)
    }

    const id = getSpotifyPlaylistId(value.link)

    try {
      const response = await fetch(`${process.env.SANITY_STUDIO_SPOTIFY_API_URL}/playlist/${id}`)
      const data = await response.json()
      const formattedData = formatOutput(data)

      onChange(set(formattedData))
    } catch (err) {
      setError('Failed to fetch data.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Box marginBottom={5}>
        <Button
          text={loading ? 'Fetching...' : 'Fetch playlist data'}
          onClick={fetchData}
          disabled={loading}
        />
      </Box>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {renderDefault(props)} {/* This renders the native array field UI */}
    </>
  )
}

export default SpotifyFetch
