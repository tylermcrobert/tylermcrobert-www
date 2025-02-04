// 'http://localhost:5173/api/spotify/playlist/4ZKYVt4lSbsfOWgOc0bybT'

import React, {useState} from 'react'
import {Button} from '@sanity/ui'
import {set, ObjectInputProps} from 'sanity'

function formatOutput(data: any) {
  const oldestDate = data.tracks.items
    .map((item: any) => new Date(item.added_at))
    .sort((a: number, b: number) => a - b)[0] as Date

  const totalMilliseconds = data.tracks.items
    .map((item: any) => item.track.duration_ms)
    .reduce((total: number, current: number) => total + current, 0)

  return {
    name: data.name,
    href: data.external_urls.spotify,
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

const SpotifyFetch: React.FC<ObjectInputProps> = (props) => {
  const {value = [], onChange, renderDefault} = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        'http://localhost:5173/api/spotify/playlist/4ZKYVt4lSbsfOWgOc0bybT',
      )
      const data = await response.json()

      onChange(set(formatOutput(data).tracks))
    } catch (err) {
      setError('Failed to fetch data.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button
        text={loading ? 'Fetching...' : 'Fetch Data'}
        onClick={fetchData}
        disabled={loading}
      />
      {error && <p style={{color: 'red'}}>{error}</p>}
      {renderDefault(props)} {/* This renders the native array field UI */}
    </>
  )
}

export default SpotifyFetch
